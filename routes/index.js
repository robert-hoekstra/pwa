var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/index', { title: 'Booky' });
});

router.get('/mijninstellingen', function(req, res, next) {
  res.render('layouts/mijninstellingen', { title: req.params.title });
});

router.get('/hoemaakikeenwerkstuk', function(req, res, next) {
  res.render('layouts/help', { title: req.params.title });
});

router.get('/mijnwerkstukken', function(req, res, next) {
  res.render('layouts/mijnwerkstukken', { title: req.params.title });
}, 

function (req, res, next) {

const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
let query = 'geschiedenis';
//  query = query.substring(1)
const key = '76f45dfa187d66be5fd6af05573eab04';
const secret = '2cb15758acac08d6ebe6f5ac7a293d69';
const detail = 'Basic';
const refine = 'false'
const facet = 'language(dut)'
const url = `${endpoint}${query}&authorization=${key}&detaillevel=${detail}&${facet}&output=JSON`;

const config = {
  Authorization: `Bearer ${secret}`
};

  const fetch = require('node-fetch');
  fetch(url, config).then(data => data.text()).then(data => {
    console.log(JSON.parse(data.trim()))
  })
});

router.get('/onderwerp-kiezen', function(req, res, next) {


  res.render('layouts/onderwerp', { title: req.params.title, subjects:[
    "Geschiedenis",
    "Dieren",
    "Landen en Steden",
    "Sport en Hobby",
    "Natuur",
    "Bekende Personen",
    "Mens & Gezondheid",
    "Beroepen"
  ]},

  
  );

  console.log("zoeken!")
});

router.get('/:param', async function(req, res, next) {

const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = req.params.param;
const key = '76f45dfa187d66be5fd6af05573eab04';
const secret = '2cb15758acac08d6ebe6f5ac7a293d69';
const detail = 'Default';
const refine = 'true'
const facet = 'language(en)'
const url = `${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=JSON`

const config = {
  Authorization: `Bearer ${secret}`
};

console.log("query", query)

 let data = await fetch(url, config).then(data => data.text()).then(data => {return JSON.parse(data.trim())})
 console.log("data", data.results)

res.render('layouts/books', { title: req.params.title, data: data.results}


  
  );

  console.log("render boeken")
});

/* GET detail page. */
// router.get('/:stringparam', function(req, res, next) {
//   res.render('detail', { title: req.params.stringparam,
//   body: 'Dit is de body'});
// });

// router.get('/*', function(req, res, next) {
//   res.render('404', { title: req.params.stringparam,
//   body: 'Page not found!'});
// });





module.exports = router;
