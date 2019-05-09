const chai = require('chai');  // middleware 
const expect = require('chai').expect; // middleware

chai.use(require('chai-http'));

const app = require('../index.js'); // App

describe("API UNIT TEST", function(){

  // Get '/math/:add' request 
  it("GET '/math/:add' request | Should add two number", function() {
    // send valid query to '/math/:add' with GET request
    // n1=10 and n2=20 values are given as a query
    // pass the test when result is 30 with 200 status
    return chai.request(app)
      .get('/math/:add')
      .query({
        n1: '10',
        n2: '20'
      }) 
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object').to.be.includes({result: 30});
      })
      .catch(function (err) {
        throw err;
     });
  });

  // POST '/math/add' request 
  it("POST '/math/add' request | Should add two number", function() {
    // Send valid body to '/math/add' with POST request
    // n1=10 and n2=20 values are given as a body
    // Pass the test when result is 30 with 200 status
    // Otherwise it fails the test
    return chai.request(app)
      .post('/math/add')
      .send({
        n1: '10',
        n2: '20'
      })
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object').to.be.includes({result: 30});
      })
      .catch(function (err) {
        throw err;
     });
  });

  // GET '/:airports' request 
  it("GET '/:airports' request | Should return active airports", function() {
    // '/:airport' with GET request
    // pass the test when status is 200 from the external API 
    // Otherwise it fails the test
    return chai.request(app)
      .get('/math/:airport')
      .then(function(res) {
        expect(res).to.have.status(200);
      })
      .catch(function (err) {
        throw err;
     });
  });

});
