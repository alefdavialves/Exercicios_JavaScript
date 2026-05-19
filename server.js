const express = require('express')
const app = express()
const port = 3000

//Definir arquivo estático
//Modulo de caminho (Ajusta a barra de acordo com SO)
const path = require ('path')

//arquivos estáticos (public)

app.use(express.static(path.join(__dirname, 'public')))
//cd projeto-crude/public

//Chamar conexão banco
const db = require('./db')

//Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

