const Sequelize = require('sequelize')


const sequelize = new Sequelize('loja_dsapi','root','senhadobd',{
    host:'localhost',
    dialect:'mysql'
})


module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}