import { combineReducers } from 'redux'

import devs from './devs'
import mobile from './mobile'
import web from './web'

export default combineReducers({
  devs,
  mobile,
  web
})
