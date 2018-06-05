import { makeHttp } from '../utils'
import { searchAll, searchOne } from '../utils/actions'

export default (url, key, timeout) => {
  const http = makeHttp(url, timeout)

  return {
    searchAll: searchAll(http, 'products', key),
    searchOne: searchOne(http, 'product', key),
    setOne: ({ commit }, params) => {
      params.mutation = 'mutation' in params ? params.mutation : 'SET_ACTUAL'
      commit(mutation, params.value)
    }
  }
}
