import { put, call, takeLatest, all } from 'redux-saga/effects';
import {
  auth,
  convertCollectionSnapshotToMap,
  createUserProfileDocument,
  firestore,
  getCurrentUser,
  googleProvider,
} from '../firebase/firebase.utils';
import actionTypes from './types';

// Local Sagas
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  signinSuccess,
  signinFailure,
  signoutFailure,
  signoutSuccess,
  clearAllCart,
  signupFailure,
  signupSuccess,
} from './actions';

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
export function* fetchCollectionsStart() {
  yield takeLatest(actionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync);
}

// TODO: *Signin with Google and (Email & Password)
function* userSigninSnapshot(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}

export function* signinWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield userSigninSnapshot(user);
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(actionTypes.GOOGLE_SIGNIN_START, signinWithGoogle);
}

/// Email Signin
export function* signinWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield userSigninSnapshot(user);
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}

export function* onEmailSigninStart() {
  yield takeLatest(actionTypes.EMAIL_SIGNIN_START, signinWithEmail);
}

// onAuthStateChanged
function* isAuthenticatated() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield userSigninSnapshot(user);
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}
function* onCheckUserSession() {
  yield takeLatest(actionTypes.CHECK_USER_SESSION, isAuthenticatated);
}

// signout
function* signOut() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signoutFailure(error.message));
  }
}

function* onSignOut() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signOut);
}

// allCartClear when user logout
function* clearCartSignout() {
  yield put(clearAllCart());
}

function* onClearCart() {
  yield takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearCartSignout);
}

// signup and then signin
function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signupSuccess({ user, additionalData: displayName }));
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

function* onSignUp() {
  yield takeLatest(actionTypes.SIGN_UP_START, signUp);
}

function* signinAfterSignup({ payload: { user, additionalData } }) {
  yield userSigninSnapshot(user, additionalData);
}

function* onSignupSuccess() {
  yield takeLatest(actionTypes.SIGN_UP_SUCCESS, signinAfterSignup);
}

export function* userSagas() {
  yield all([
    call(fetchCollectionsStart),
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
    call(onSignOut),
    call(onClearCart),
    call(onSignUp),
    call(onSignupSuccess),
  ]);
}
