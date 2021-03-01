import { SET_C } from '../actions/c'

export default function c (state = [], action) {
  switch (action.type) {
    case SET_C:
      return action.devs.filter(dev => dev.languages.find(element => element.languageName === 'C#'))

    default:
      return state
  }
}
