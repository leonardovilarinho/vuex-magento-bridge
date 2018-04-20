import { makeHttp } from '../utils'
import { searchAll } from '../utils/actions'

export default (url, key, timeout) => {
  const http = makeHttp(url, timeout)

  return {
    searchAll: searchAll(http, 'products', key)
  }
}
