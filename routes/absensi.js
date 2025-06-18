const express = require('express')
const router = express.Router()
const AbsensiModel = require('../models/Absensi')


router.get('/',async(req, res)=>{
    const absensi = await AbsensiModel.findAll()
    res.status(200).json({
        data: absensi,
        metadata: "test absensi endpoint"
    })
})
router.post('/checkin',async(req, res)=>{
    const {nip} = req.body
    const absensi = await AbsensiModel.create({
        Users_nip: nip,status:'in'
    })
    res.status(200).json({
        data: absensi,
        metadata: "checkin berhasil"
    })
})
router.post('/checkout',async(req, res)=>{
    const {nip} = req.body
    const absensi = await AbsensiModel.create({
        Users_nip: nip,status:'out'
    })
    res.status(200).json({
        data: absensi,
        metadata: "checout berhasil"
    })
})
module.exports = router