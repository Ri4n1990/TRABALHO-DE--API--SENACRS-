const { CHAR } = require('sequelize')
const db = require('./db')


const cidade = db.sequelize.define('cidades',{
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    nome:{
        type:db.Sequelize.CHAR(50),
        allowNull:false
    }

},

{
    timestamps:false,
    tableName:'cidades'
})

const cliente = db.sequelize.define('clientes',{

    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    nome:{
        type:db.Sequelize.CHAR(100),
        allowNull:false

    },

    altura:{
        type:db.Sequelize.DOUBLE(3,2)
    },
    nascimento:{
        type:db.Sequelize.DATE
    },    

},


{
    timestamps:false,
    tableName:'clientes'
})

cidade.hasMany(cliente,{foreignKey:'cidade_id'})
cliente.belongsTo(cidade,{foreignKey:'cidade_id'}) 


const pedido = db.sequelize.define('pedidos',{

    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    horario:{
        type:db.Sequelize.DATE
    },
    endereco:{
        type:db.Sequelize.CHAR(200)
    }

},{
    tableName:'pedidos',
    timestamps:false
})

pedido.hasMany(cliente,{foreignKey:'cliente_id'})
cliente.belongsTo(pedido,{foreignKey:'cliente_id'})



const categoria = db.sequelize.define('categorias',{


    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    nome:{
        type:db.Sequelize.CHAR(100),
        allowNull:false
    }
},

{
    tableName:'categorias',
    timestamps:false
})

const produto = db.sequelize.define('produtos',{
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:db.Sequelize.CHAR(100),
        allowNull:false
    },
    preco:{
        type:db.Sequelize.DOUBLE
    },


    quantidade:{
        type:db.Sequelize.DOUBLE
    }




},{
    tableName:'produtos',
    timestamps:false
})



const pedido_produto =  db.sequelize.define('pedidos_produtos',{
    pedido_int:{
        type:db.Sequelize.INTEGER,
        primaryKey:true
    },
    produto_id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true
        
    },
    preco:{
        type:db.Sequelize.DOUBLE
    },

    quantidade:{
        type:db.Sequelize.DOUBLE
    }



},
{
    tableName:'pedidos_produtos'
})

categoria.belongsToMany(produto,{through:pedido_produto})
produto.belongsToMany(categoria,{through:pedido_produto})

module.exports = {
    cidade,
    cliente
}

module.exports = {
    cliente,
    pedido,
    categoria,
    cidade,
    produto,
    pedido_produto
}