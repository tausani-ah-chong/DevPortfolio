import { dispatch } from '../store'
import consume from '../consume'
import { setDevs } from '../actions/devs'

export function getDev () {
  return consume('/dev')
    .then((res) => {
      dispatch(setDevs(res.body))
      return null
    })
}
