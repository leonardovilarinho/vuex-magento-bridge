import { shuffle } from './index'

export const searchAll = (http, object, key) =>
  // {page = 0, size = 0, mutation = 'SET_ALL', shuf = false}
  async ({ commit }, params = {}) => {
    let query = `?apikey=${key}`
    params.mutation = 'mutation' in params ? params.mutation : 'SET_ALL'
    params.page = 'page' in params ? params.page : 0
    params.size = 'size' in params ? params.size : 0
    params.shuf = 'shuf' in params ? params.shuf : false

    const { mutation, page, size, shuf } = params
    
    if (page !== 0 && size !== 0) {
      query += `&page=${page}&pageSize=${size}`
    }

    const list = (await http.get(`/${object}/index${query}`)).data.result
    if ('shuf' in obj) return commit(mutation, shuffle(list))

    commit(mutation, list)
  }
