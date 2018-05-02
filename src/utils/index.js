import axios from 'axios'

export const makeHttp = (url, timeout) => (
  axios.create({
    baseURL: url.substr(-1) !== '/' ? url : url.substr(0, url.length - 1),
    timeout,
    headers: { 'Content-Type': 'application/json' }
  })
)

export const shuffle = (arr) =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
