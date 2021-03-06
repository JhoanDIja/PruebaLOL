const express = require('express')
const app = express()
const port = 3000

const path = require('path')

app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
})
  
  app.get('/ayuda.html', (req, res) => {
      res.sendFile(path.resolve(__dirname,'ayuda.html'))
})
  
  app.get('/descargar.html', (req, res) => {
      res.sendFile(path.resolve(__dirname,'descargar.html'))
})
  
  app.get('/Login.html', (req, res) => {
      res.sendFile(path.resolve(__dirname,'Login.html'))
})
  
  app.get('/Registrar.html', (req, res) => {
      res.sendFile(path.resolve(__dirname,'Registrar.html'))
})
  
  app.get('/Registrar2.html', (req, res) => {
      res.sendFile(path.resolve(__dirname,'Registrar2.html'))
})
  
  

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