import { dispatch } from '../store'
import consume from '../consume'
import { setDevs } from '../actions/devs'
import { setMobile } from '../actions/mobile'
import { setWeb } from '../actions/web'
import { setSoftware } from '../actions/software'

export function setStore () {
  return consume('/dev')
    .then((res) => {
      dispatch(setDevs(res.body))
      dispatch(setMobile(res.body))
      dispatch(setWeb(res.body))
      dispatch(setSoftware(res.body))
      return null
    })
}
