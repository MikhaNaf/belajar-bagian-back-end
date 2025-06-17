const { Sequelize } = require   ('sequelize')

const sequelize = new Sequelize('absensi', 'root', 'jajang13',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize