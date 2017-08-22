/**
 * Created by imamudinnaseem on 5/17/17.
 */
'use strict'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/app'
import {AppContainer} from 'react-hot-loader'
import rwc from 'rwc';
import * as U from 'fp-util';
console.log(rwc);
const render = Component => {
    ReactDOM.render(
        <AppContainer><Component /></AppContainer>,
        document.getElementById('root')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./components/app', () => {
        render(App)
    })
}
