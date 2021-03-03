import { SET_WEB } from '../actions/web'

export default function web (state = [], action) {
  switch (action.type) {
    case SET_WEB:
      return action.devs.filter(dev => {
        return dev.platforms.find(plat => plat.platformName === 'Web Development')
      })

    default:
      return state
  }
}
