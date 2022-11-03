import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.22.172.157:3333',
})
