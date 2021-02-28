import { SET_MOBILE } from '../actions/mobile'

export default function mobile (state = [], action) {
  switch (action.type) {
    case SET_MOBILE:
      return action.devs.filter(dev => {
        return dev.platforms.find(plat => plat.platformName === 'Mobile Development')
      })

    default:
      return state
  }
}
