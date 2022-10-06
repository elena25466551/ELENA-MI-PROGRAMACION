const express = require('express')// importando librerianpm express
const app = express()

app.get('/', function (req, res) {
  res.send({message:"Hola"})
})

app.post('/home', function (req, res) {(
    res.ststus(400).json
    message:"Band requets"
  })
app.listen(3000)