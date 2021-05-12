import { createSelector } from 'reselect';

const selectLocalDatabase = (state) => state.localDatabase;

export const selectCategories = createSelector(
  selectLocalDatabase,
  (localDatabase) => localDatabase.categories
);

export const selectCollections = createSelector(
  selectLocalDatabase,
  (localDatabase) => localDatabase.collections
);

export const selectCollectionsAndMakeArray = createSelector(
  selectCollections,
  (collectionsObject) =>
    Object.keys(collectionsObject).map((key) => collectionsObject[key])
);

export const SelectCollection = (paramUrl) =>
  createSelector(selectCollections, (collections) => collections[paramUrl]);

  