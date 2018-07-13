import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import reducer from './reducer'
import App from './App'
import './assets/index.css'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducer, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()
