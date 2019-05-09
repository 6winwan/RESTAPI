let router = require('express').Router();

// GET method /math/:add route
router.get('/math/:add', function (req, res) {
   // get n1, n2 from URL(query)and change them to number
   var first = parseInt(req.query.n1);
   var second = parseInt(req.query.n2);
   var result = first + second;
   
   // response result in json
   res.json({
      nubmer_1: first,
      nubmer_2: second,
      result: result
   });
});

// POST method /math/add route
router.post('/math/add', function (req, res) {
   // get n1, n2 from body and change them to number
   var first = parseInt(req.body.n1);
   var second = parseInt(req.body.n2);
   var result = first + second;
   
   // response result in json
   res.json({
      nubmer_1: first,
      nubmer_2: second,
      result: result
   });
});

// GET mothod /:airport route
router.get('/:airports', function (req, res) {
   // Use CIRIUM FLIGHTSTATS API to fetched the data(active airport inforamtion)
   var request = require('request');

   var options = {
       url: 'https://api.flightstats.com/flex/airports/rest/v1/json/active?appId=ec3f59dc&appKey=245f3042db80847de9883ecb2bcff148'  
   };
   
   function callback(error, response, body) {
       if (!error && response.statusCode == 200) {
         res.json({
            active_airports: body
         });
       }
   }
   request(options, callback);
});

module.exports = router;