const rotas = require('express').Router()

const conexao = require('./config/conexao')

//rota para listar os dados da database

rotas.get('/', (req, res) => {
  //criando uma query para selecionar todos os dados da  tabela tb_tarefas
  let sql = 'select * from  tb_transferencias'
  //estou criando um query (linha de comando no mysqul). através da variável conexão

  conexao.query(sql, (erro, rows, filds) => {
    if (erro) throw erro
    res.json(rows)
  })
})

//rota para mostrar apenas uma tarefa de acordo com seu id
rotas.get('/:id', (req, res) => {
  const { id } = req.params
  let sql = 'select * from tb_transferencias where id_tranferencia = ?'
  conexao.query(sql, [id], (erro, rows, fields) => {
    if (erro) throw erro
    res.json(rows[0])
  })
})
rotas.delete('/:id', (req, res) => {
  const { id } = req.params
  let sql = `delete from tb_transferencias where id_tranferencia = '${id}' `
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro
    res.json({ status: 'tarefa excluida com sucesso' })
  })
})

rotas.post('/', (req, res) => {
  const { nomeClient, valor, contaCliente } = req.body
  let sql = `insert into tb_transferencias(nomeClient, valor, contaCliente) values('${nomeClient}', '${valor}','${contaCliente}' )`
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro
    res.json({ status: 'tarefa incluida com sucesso' })
  })
})
rotas.put('/:id', (req, res) => {
  const { id } = req.params
  const { nomeClient, valor, contaCliente } = req.body
  //vamos declarar um variavel sql vamos usar a crase para o template e vamos fazer o comando para fazer o update. vamos editar o campo de descrição atraves do que foi passado no body dentro da variavel que acabamos de criar em cima. e tambem para o body passado para o body.
  //onde nosso id_tarefa que será igual o que foi passado para o parametro
  let sql = `update tb_transferencias set nomeClient = '${nomeClient}', valor = '${valor}', contaCliente = '${contaCliente}' where id_tranferencia = '${id}'`

  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro
    res.json({ status: 'tarefa editada com sucesso' })
  })
})

module.exports = rotas
