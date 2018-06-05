import { shuffle } from './index'

export const searchAll = (http, object, key) =>
  async ({ commit }, params = {}) => {
    let query = `?apikey=${key}`

    params.mutation = 'mutation' in params ? params.mutation : 'SET_ALL'
    params.page = 'page' in params ? params.page : 0
    params.pagesize = 'pagesize' in params ? params.pagesize : 0
    params.shuf = 'shuf' in params ? params.shuf : false

    const { mutation, page, pagesize, shuf } = params
    
    if (page !== 0 && pagesize !== 0) {
      query += `&page=${page}&pageSize=${pagesize}`
    }

    const list = (await http.get(`/${object}/index${query}`)).data.result
    if (shuf) return commit(mutation, shuffle(list))

    commit(mutation, list)
  }

export const searchOne = (http, object, key) =>
  async ({
    commit
  }, params = {}) => {
    let query = `?apikey=${key}&url=${params.url}`

    params.mutation = 'mutation' in params ? params.mutation : 'SET_ACTUAL'

    const {
      mutation,
      url
    } = params

    const list = (await http.get(`/${object}/index${query}`)).data.result
    if (shuf) return commit(mutation, shuffle(list))

    commit(mutation, list)
  }
