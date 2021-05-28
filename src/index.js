import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/tailwindStyles.css';
import './assets/styles/Custom.css';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { typeDefs, resolvers } from './graphql/resolvers'

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com',
});
const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers

});

client.writeData({
  data: {
    cartHidden: true
  }
})

// client.query({
//   query: gql`
//    {
//     collection(id:"cjwuuj5bz000i0719rrtw5gqk")  {
//       title
//       id
//       items {
//         id
//         name
//       }
//     }
//    }
//   `
// }).then(console.log)

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router /*basename={process.env.PUBLIC_URL}*/>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Router>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
