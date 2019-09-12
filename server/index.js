
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express');
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const fs = require('fs')
const path = require('path')
const filePath = './data.json'
const data = require(filePath)


app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json())

  server.get('/api/v1/movies', (req, res) => {
    return res.json(data)
  })

  server.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = data.find(m => m.id === id)
    res.status(200).json(movie)
  })

  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body
    data.push(movie)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(data, null, 2)

    fs.writeFile(pathToFile, stringifiedData, function(err) {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('File Sucesfully updated')
    })
  })

  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const index = data.findIndex(m => m.id === id)
    data.splice(index, 1)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(data, null, 2)

    fs.writeFile(pathToFile, stringifiedData, function(err) {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('File Sucesfully updated')
    })
  })

  server.patch('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = req.body

    const index = data.findIndex(m => m.id === id)
    data[index] = movie

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(data, null, 2)

    fs.writeFile(pathToFile, stringifiedData, function(err) {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('File Sucesfully updated')
    })
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
