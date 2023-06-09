const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const tabelas = require('./modulos/posts')
app.use(bodyparser.urlencoded({extended:false}))



//cadastro de clientes
 app.post('/cadastro',function(req,res){

    tabelas.cliente.create({
        nome:'fulano',
        altura:'1.80',
        nascimento:'2002/02/11'
    }).then(function(){
        res.send('CLIENTE CADASTRADO COM SUCESSO!')
    }).catch(function(erro){
        console.log(`HOUVE UM ERRO AO TENTAR CADASTRAR O CLIENTE ${erro}`)
    })
 })
 //consulta de produtos
 app.post('/produtos',function(req,res){
    tabelas.produto.findAll().then(function(prods){
        res.send(`AQUI ESTÃO OS PRODUTOS ${prods}`)
    }).catch(function(erro){
        console.log(`HOUVE UM ERRO  AO TENTAR CONSULTAR OS PRODUTOS ${erro}`)
    })
 })


 //realização de um pedido

 app.post('/realizarpedido',function(req,res){
    tabelas.pedido.create({
        horario:'10:56:32',
        endereco:'Rua python não tipa'
    }).then(tabelas.pedido.findAll({where:{'endereco':endereco}}  ).then(function(novopedido){
        res.send(`NOVO PEDIDO REGISTRADO: ${novopedido}`)
    })
    ).catch(function(erro){
        console.log(`HOUVE UM ERRO AO TENTAR REALIZAR UM PEDIDO ${erro}`)
    })

 })


// pedidos realizados
app.post('/pedidosrealizados',function(req,res){
    tabelas.pedido.findAll({order:[['id','DESC']]}).then(function(pedidosregistrados){
        res.send(`AQUI ESTÃO OS PEDIDOS REALIZADOS ${pedidosregistrados}`)
    }).catch(function(erro){
        console.log(`HOUVE UM ERRO AO TENTAR MOSTRAR OS PEDIDOS REALIZADOS ${erro}`)
    })
})


// ----------ÁREA ADMNISTRATIVA----------


//criação de produtos

app.post('/criarprodutos',function(req,res){
    tabelas.produto.create({
        nome:'carro',
        preco:'2.99',
        quantidade:'10'        
    }).then(function(){
        res.send('PRODUTO CRIADO COM SUCESSO!')
    }).catch(function(erro){
        console.log(`HOUVE UM ERRO AO TENTAR CRIAR UM PRODUTO ${erro}`)
    })
})

//atualização de um produto
app.put('/atualizarprodutos',function(req,res){
    tabelas.produto.update({nome:'moto',preco:'4.99',quantidade:'20'},{where:{nome:'carro'}}).then(function(){
        res.send('PRODUTO ATUALIZADO COM SUCESSO!')
    }).catch(function(erro){
        console.log(`HOUVE UM ERRO AO TENTAR ATUALIZAR O PRODUTO ${erro}`)
    })
})

//deletar um produto
app.get('/deletar:id',function(req,res){
    tabelas.produto.destroy({where:{'id':req.params.id}}).then(function(){
        res.send('PRODUTO DELETADDO COM SUCESSO!')
    }).catch(function(erro){
        console.log(`HOUVE UM ERRO AO TENTAR DELETAR O PRODUTO ${erro}`)
    })
})





























app.listen(3000,function(){
    console.log('SERVER RODANDO...')
})