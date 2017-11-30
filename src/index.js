import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //处理异步action


const store = createStore(reducers, applyMiddleware(thunk))

function renderPage() {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage()
store.subscribe(renderPage)
registerServiceWorker();
