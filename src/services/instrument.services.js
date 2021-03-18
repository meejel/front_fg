import axios from 'axios'

export const getUserAssessments = (userToken) => {
  return new Promise((resolve, reject) => {
    axios.get(`/instrument/`)
      .then(result => resolve(result.data))
      .catch(error => reject(error))
  })
}
