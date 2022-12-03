'use strict'

const express = require('express');

// константы
const port = 80
const host = '127.0.0.1'

// приложение
const app = express()
app.listen(port)
app.get('/', (req, res) => {
  res.sendFile('/index.html')
})
// app.listen(port);
console.log(`Running on http://${host}:${port}`)
