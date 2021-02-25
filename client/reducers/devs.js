import { SET_DEVS } from '../actions/devs'

export default function devs (state = [], action) {
  switch (action.type) {
    case SET_DEVS:
      return action.devs

    default:
      return state
  }
}
