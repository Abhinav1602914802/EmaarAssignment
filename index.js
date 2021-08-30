/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import { name as appName } from './app.json';
import rootReducer from './src/redux/rootReducer';
import { watcherSaga } from './src/redux/saga/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleWare),
));

sagaMiddleWare.run(watcherSaga);

const Index = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Index);