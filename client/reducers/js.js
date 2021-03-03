import { SET_JS } from '../actions/js'

export default function js (state = [], action) {
  switch (action.type) {
    case SET_JS:
      return action.devs.filter(dev => dev.languages.find(element => element.languageName === 'JS'))

    default:
      return state
  }
}
