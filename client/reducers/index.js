import { combineReducers } from 'redux'

import devs from './devs'
import mobile from './mobile'

export default combineReducers({
  devs,
  mobile
})
