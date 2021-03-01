import { SET_TS } from '../actions/ts'

export default function js (state = [], action) {
  switch (action.type) {
    case SET_TS:
      return action.devs.filter(dev => dev.languages.find(element => element.languageName === 'TS'))

    default:
      return state
  }
}
