//variavel para instanciar o pacote do mysql

const mysql = require('mysql')
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lpp#1411',
  port: '3306',
  database: 'db_transferencia'
})
conexao.connect(erro => {
  if (erro) throw erro
  console.log('Estamos conectados')
})
module.exports = conexao
