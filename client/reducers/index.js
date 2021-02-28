import { combineReducers } from 'redux'

import devs from './devs'
import mobile from './mobile'
import web from './web'
import software from './software'

export default combineReducers({
  devs,
  mobile,
  web,
  software
})
