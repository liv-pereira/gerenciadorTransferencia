require('./config/conexao')
const express = require('express')
const app = express()
const porta = 3000
const cors = require ('cors')

app.use(express.json())
app.use(cors())
const rotasTransferencias = require('./rotas')

app.use('/transferencias', rotasTransferencias)

app.listen(porta, () => {
  console.log('Servidor está rodando')
})
