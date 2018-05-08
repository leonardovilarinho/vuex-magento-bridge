import { shuffle } from './index'

export const searchAll = (http, object, key) =>
  // {page = 0, size = 0, mutation = 'SET_ALL', shuf = false}
  async ({ commit }, obj) => {
    let query = `?apikey=${key}`
    
    if ('page' in obj && 'size' in obj) {
      query += `&page=${obj.page}&pageSize=${obj.size}`
    }

    if (!('mutation' in obj)) {
    	obj.mutation = 'SET_ALL'
    }

    const list = (await http.get(`/${object}/index${query}`)).data.result
    if ('shuf' in obj) return commit(obj.mutation, shuffle(list))

    commit(obj.mutation, list)
  }
