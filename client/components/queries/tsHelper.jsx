import { dispatch } from '../../store'
import consume from '../../consume'
import { setTS } from '../../actions/ts'

export function getTS () {
  return consume('/dev')
    .then((res) => {
      dispatch(setTS(res.body))
      return null
    })
}
