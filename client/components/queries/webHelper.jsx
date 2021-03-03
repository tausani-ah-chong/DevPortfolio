import { dispatch } from '../../store'
import consume from '../../consume'
import { setWeb } from '../../actions/web'

export function getWeb () {
  return consume('/dev')
    .then((res) => {
      dispatch(setWeb(res.body))
      return null
    })
}
