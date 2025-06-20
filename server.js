const express = require('express')
const cors = require('cors')
const port = 3200
const sequelize = require('./db.config')
sequelize.sync().then(()=> console.log('Database ready'))



const userEndpoint = require('./routes/users')
const absensiEndpoint = require('./routes/absensi')
const gajiendpoint = require('./routes/gaji')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', userEndpoint)
app.use('/absensi', absensiEndpoint)
app.use('/gaji',gajiendpoint)


app.listen(port, ()=> console.log(`running server on port ${port}`));


