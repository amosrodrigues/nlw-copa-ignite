import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.22.168.217:3333',
})
