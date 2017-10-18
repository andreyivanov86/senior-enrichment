'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
//import Root from './components/Root'
import App from './components/App'

const fakeCampuses=[{"id":1,"name":"Luna","url":null,"createdAt":"2017-10-18T15:43:56.149Z","updatedAt":"2017-10-18T15:43:56.149Z"},{"id":2,"name":"Terra","url":null,"createdAt":"2017-10-18T15:45:04.363Z","updatedAt":"2017-10-18T15:45:04.363Z"},{"id":3,"name":"Mars","url":null,"createdAt":"2017-10-18T15:52:08.576Z","updatedAt":"2017-10-18T15:52:08.576Z"},{"id":4,"name":"Titan","url":null,"createdAt":"2017-10-18T15:52:08.576Z","updatedAt":"2017-10-18T15:52:08.576Z"}]

render (
  //<Provider store={store}>
    <App campuses={fakeCampuses} />,
  //</Provider>,
  document.getElementById('main')
)
