import { dispatch } from '../store'
import consume from '../consume'
import { setSoftware } from '../actions/software'

export function getSoftware () {
  return consume('/dev')
    .then((res) => {
      dispatch(setSoftware(res.body))
      return null
    })
}
