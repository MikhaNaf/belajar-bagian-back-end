const express = require('express')
const router = express.Router()
const UsersModel = require('../models/users')
const bcrypt = require('bcrypt')



router.get('/',async(req, res)=>{
    const users = await UsersModel.findAll()

    
    res.status(200).json({
        data: users,
        metadata: "test user endpoint"
    })
})
router.post('/',async(req,res)=>{
    const { nip,nama,password } = req.body
    const encryptedPassword = await bcrypt.hash(password,10)

    const users = await UsersModel.create({
        nip,nama,password:encryptedPassword
    })
    res.status(200).json({
        data: users,
        metadata: "test post user endpoint"
    })

})
router.put('/',async(req,res)=>{
    const { nip,nama,password, passwordBaru} = req.body
    const userData = await UsersModel.findOne({where:{nip:nip}})
    const compare = await bcrypt.compare(password,userData.password)
    
    if(compare === true){
    const users = await UsersModel.update({
        nama,password: passwordBaru
    },{where: {nip:nip}})
    res.status(200).json({
        users:{updated:users[0]},
        metadata:"user updated"
    })
}else{
    res.status(400).json({
        error: "Password tidak sama",
    })
}
})

module.exports = router