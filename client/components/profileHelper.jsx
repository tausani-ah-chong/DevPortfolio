import { dispatch } from '../store'
import consume from '../consume'
import { setDevs } from '../actions/devs'

export function setStore (id) {
  return consume(`/dev/${id}`)
    .then((res) => {
      dispatch(setDevs(res.body))
      return null
    })
}
