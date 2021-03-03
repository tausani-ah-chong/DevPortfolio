import { SET_SOFTWARE } from '../actions/software'

export default function software (state = [], action) {
  switch (action.type) {
    case SET_SOFTWARE:
      return action.devs.filter(dev => {
        return dev.platforms.find(plat => plat.platformName === 'Software')
      })

    default:
      return state
  }
}
