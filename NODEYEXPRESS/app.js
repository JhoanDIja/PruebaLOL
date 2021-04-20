const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contacto', (req, res) => {
    res.send('Estas en contactos')
})

app.get('/sobre', (req, res) => {
    res.send('Hola estas en acerca de nosotros')
})

app.get('/servicios', (req, res) => {
    res.send('Estas en servicios')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})