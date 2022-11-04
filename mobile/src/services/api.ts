import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.22.166.154:3333',
})
