import axios from 'axios'

export const postObtainToken = (username, password) => {
  const payload = {
    username,
    password
  }
  return new Promise((resolve, reject) => {
    axios.post('/api-token-auth/', payload)
      .then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
  })
}

export const postUpdateToken = token => {
  const payload = {
    token
  }
  return new Promise((resolve, reject) => {
    axios.post('/api-token-refresh/', payload)
      .then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
  })
}
