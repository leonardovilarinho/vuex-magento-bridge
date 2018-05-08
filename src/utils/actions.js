import { shuffle } from './index'

export const searchAll = (http, object, key) =>
  // {page = 0, size = 0, mutation = 'SET_ALL', shuf = false}
  async (
  	{ commit },
  	{page: page, size: size, mutation: mutation, shuf: shuf} =
  	{page: 0, size: 0, mutation: 'SET_ALL', shuf: false}
  ) => {
    let query = `?apikey=${key}`
    
    if (page !== 0 && size !== 0) {
      query += `&page=${page}&pageSize=${size}`
    }

    const list = (await http.get(`/${object}/index${query}`)).data.result
    if (shuf) return commit(mutation, shuffle(list))

    commit(mutation, list)
  }
