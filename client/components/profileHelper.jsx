import { dispatch } from '../store'
import consume from '../consume'
import { setDevs } from '../actions/devs'

export function setStore (uid) {
  return consume(`/dev/${uid}`)
    .then((res) => {
      dispatch(setDevs(res.body))
      return null
    })
}
