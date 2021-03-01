import { dispatch } from '../../store'
import consume from '../../consume'
import { setC } from '../../actions/c'

export function getC () {
  return consume('/dev')
    .then((res) => {
      dispatch(setC(res.body))
      return null
    })
}
