
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express');
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const data = require('./data.json')

app.prepare().then(() => {
  const server = express();

  // server.get('/api/v1/movies', (req, res) => {
  //   return res.json(data)
  // })

  server.use(bodyParser.json())

  server.post('/api/v1/movies', (req, res) => {
    const { body } = req
    console.log(body)
    return res.json({data: 'succesful'})
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})
