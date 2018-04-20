import { makeHttp } from '../utils'

export default (url, key, timeout) => {
  const http = makeHttp(url, timeout)

  return {
    searchAll: async ({ commit }) => {
      const list = (await http.get('/categories')).data.result
      commit('SET_ALL', list)
    }
  }
}
