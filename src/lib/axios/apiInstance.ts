import axios from 'axios'

const apiInstance = axios.create({
   baseURL: 'https://api.skilla.ru/',
   timeout: 10000,
   headers: {
      Authorization: 'Bearer testtoken',
   },
})

export default apiInstance
