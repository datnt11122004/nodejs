const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.get('/tin-tuc', (req, res) => {
    return res.send('tiin tuWorld!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})