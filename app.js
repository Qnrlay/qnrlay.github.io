const request = axios.create({
  baseURL: 'https://api.scratch.mit.edu'
})

request.get('/users/qurlay')
  .then (res => res.data)
  .then (console.log)
