import { dispatch } from '../store'
import consume from '../consume'
import { setMobile } from '../actions/mobile'

export function getMobile () {
  return consume('/dev')
    .then((res) => {
      dispatch(setMobile(res.body))
      return null
    })
}
