export const postObtainToken = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFsZXhpcyIsImV4cCI6MTkzOTMxMzM5NSwiZW1haWwiOiJhbGV4aXNAbWFpbC5jb20iLCJvcmlnX2lhdCI6MTUyODIxMzA5NX0.VVQumdLnnEm46cOkv3B6UecKiRv3ikTsDxDpTrb4fKg'
        resolve({
          token: token,
          user: 'Pedro Perez',
          permissions: []
        })
      } else {
        reject(new Error())
      }
    }, 1000)
  })
}

export const postUpdateToken = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error())
    })
  })
}
