// Route our CRUD requests from the UI. I chose to use the simplest model, where all routes run from '/'
// This page uses burger.js to perform CRUD functions
const express = require('express')
const router = express.Router()
const burger = require('../models/burger.js')

// Initial page render where all burgers are displayed by class: devoured or not devoured
router.get('/', (req,res,next)=>{
  burger.selectAll((data)=>{
    res.render('index', { burgers: data, style: 'burger_style' })
  })
})
// When the user inputs a new burger, run the post method to add it to the database and redirect to initial page render
router.post('/', (req,res,next)=>{
  burger.insertOne(req.body.burger_name, ()=>{
    res.redirect('/')
  })
})
// When the use clicks on a devour button, update that burger to devoured and redirect to initial page render
router.put('/:id', (req,res,next)=>{
  let id = req.params.id
  burger.updateOne(id, ()=>{
    res.redirect('/')
  })
})

module.exports = router
