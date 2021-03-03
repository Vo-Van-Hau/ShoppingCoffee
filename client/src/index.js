import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reducer
import allReducers from './reducers/index';

// Components
import CustomApp from './CustomApp';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render( 
    <Provider store={store}>
        <CustomApp />
    </Provider>
    , document.getElementById('root')
);


