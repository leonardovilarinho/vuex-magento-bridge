import { shuffle } from './index'

export const searchAll = (http, object, key) =>
  // {page = 0, size = 0, mutation = 'SET_ALL', shuf = false}
  async ({ commit }, {page = 0, size = 0, mutation = 'SET_ALL', shuf = false}) => {
    let query = `?apikey=${key}`
    page = page == undefined ? 0 : page
    size = size == undefined ? 0 : size
    mutation = mutation == undefined ? 'SET_ALL' : mutation
    shuf = shuf == undefined ? false : shuf
    
    if (page !== 0 && size !== 0) {
      query += `&page=${page}&pageSize=${size}`
    }

    const list = (await http.get(`/${object}/index${query}`)).data.result
    if ('shuf' in obj) return commit(mutation, shuffle(list))

    commit(mutation, list)
  }
