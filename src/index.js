import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import {Provider} from 'react-redux'
import store from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store)
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
