import { dispatch } from '../../store'
import consume from '../../consume'
import { setJS } from '../../actions/js'

export function getJS () {
  return consume('/dev')
    .then((res) => {
      dispatch(setJS(res.body))
      return null
    })
}
