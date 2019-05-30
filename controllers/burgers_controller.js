const express = require('express')
const router = express.Router()
const burger = require('../models/burger.js')

router.get('/', (req,res,next)=>{
  burger.selectAll((data)=>{
    res.render('index', { burgers: data, style: 'burger_style' })
  })
})

router.post('/', (req,res,next)=>{
  burger.insertOne(req.body.burger_name, ()=>{
    res.redirect('/')
  })
})

router.put('/:id', (req,res,next)=>{
  let id = req.params.id
  burger.updateOne(id, ()=>{
    res.redirect('/')
  })
})

module.exports = router
