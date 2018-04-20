export const searchAll = (http, object, key) =>
  async ({ commit }, mutation = 'SET_ALL', page = 0, size = 0, shuffle = false) => {
    let query = `?apikey=${key}`
    if (page !== 0 && size !== 0) {
      query += `&page=${page}&pageSize=${size}`
    }

    const list = (await http.get(`/${object}/index${query}`)).data.result
    commit(mutation, list)
  }
