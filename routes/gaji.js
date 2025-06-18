const express = require('express')
const router = express.Router()
const GajiModel = require('../models/gaji')


router.get('/',async(req, res)=>{
    const gaji = await GajiModel.findAll()
    res.status(200).json({
        data: gaji,
        metadata: "test gaji endpoint"
    })
})
router.post('/sudah',async(req, res)=>{
    const {nip} = req.body
    const gaji = await GajiModel.create({
        Users_nip: nip,status:'sudah'
    })
    res.status(200).json({
        data: gaji,
        metadata: "sudah dapat gaji"
    })
})
router.post('/belum',async(req, res)=>{
    const {nip} = req.body
    const gaji = await GajiModel.create({
        Users_nip: nip,status:'belum'
    })
    res.status(200).json({
        data: gaji,
        metadata: "belum dapat gaji"
    })
})
module.exports = router