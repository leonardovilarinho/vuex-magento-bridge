import axios from 'axios'

export const makeHttp = (url, timeout) => (
  axios.create({
    baseURL: url.substr(-1) !== '/' ? url : url.substr(0, -1),
    timeout
  })
)
