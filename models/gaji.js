const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class Gaji extends Model { }

Gaji.init({
    Users_nip: {
        type: DataTypes.INTEGER,
    },
    status:{
        type: DataTypes.ENUM('sudah', 'belum')
    }
},{
    sequelize,
    modelName: 'Gaji'
})
module.exports = Gaji