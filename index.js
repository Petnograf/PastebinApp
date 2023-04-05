import React from 'react';
import {AppRegistry} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import Store from './app/config/store';

import AppContainer from './app/index';
import {name as appName} from './app.json';

function App() {
  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <ApolloProvider client={client}>
          <AppContainer />
        </ApolloProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
