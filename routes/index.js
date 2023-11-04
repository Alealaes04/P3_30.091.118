var express = require('express');
var router = express.Router();
const db = require('../db/models');
require('dotenv').config()



let logged = false;

router.get('/', (req, res) => {
  res.render('login')
} )

router.post('/login', (req,res) =>{
  console.log(req.body)
  if (req.body.user === process.env.USER && req.body.pass === process.env.PASS) {
    console.log("Iniciaste")
    logged = true
    res.redirect('/index')
  
  } else {
    logged = false
    res.redirect('/')
  }
})


router.get('/index', (req, res) => {
  db.getproducto()
    .then(data => {        
      console.log(data)
      res.render('index', { producto: data });
  })
  .catch(err => {
      res.render('index', { producto: [] });
  })

});

router.get('/insert', (req, res) => {
  res.render('insert')
} )

router.post('/insert', (req, res) => {
  const {code, name, brand, model, description, price, category_id} = req.body;
  console.log(code, name, brand, model, description, price, category_id);
  db.insertproducto(code, name,brand,model,description,price,category_id)
  .then(() => {
     res.redirect('index')
  })
  .catch(err => {
    console.log(err);
  })
});



router.post('/edit/', (req, res)=>{
  const {id, code, name, brand, model, description, price, category_id,} = req.body;
  db.updateproducto(id, code, name, brand, model, description, price, category_id)
  .then(() =>{
    res.redirect('/index');
  })
  .catch(err =>{
    console.log(err);

  })
});



router.get('/edit/:id', (req, res)=>{
  const id = req.params.id
  db.getproductoID(id)
  .then(data =>{
    console.log(data)
    res.render('edit', {producto: data[0]})
  })
    .catch(err =>{
      console.log(err);
      res.render('edit', {producto: []})
    }) 


    
})

router.get('/delete/:id', (req, res)=>{
  const id = req.params.id;
  db.deleteproducto(id)
    .then(() => {
    res.redirect('/index');
  })
  .catch(err => {
  console.log(err);
  });
})





module.exports = router;
