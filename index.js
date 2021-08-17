/**
 * @format
 */

 import React from 'react';
 import {AppRegistry} from 'react-native';
 import {Provider} from 'react-redux';
 import {createStore, applyMiddleware} from 'redux';
 import thunk from 'redux-thunk';
 import {composeWithDevTools} from 'redux-devtools-extension';
 
 import App from './App';
 import {name as appName} from './app.json';
 
 import rootReducer from './src/redux/rootReducer';
 
 const middleware = applyMiddleware(thunk);
 const store  = createStore(rootReducer, composeWithDevTools(middleware));
 
 const Index = () => {
     return (
         <Provider store = { store }>
             <App />
         </Provider>
     );
 }
 
 AppRegistry.registerComponent(appName, () => Index);