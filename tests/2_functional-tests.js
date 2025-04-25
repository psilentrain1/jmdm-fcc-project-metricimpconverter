const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    this.timeout(5000)

    test('Convert a valid input', function(done){
        chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({input: "3.2mi"})
        .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, '10');
            assert.equal(res.body.initUnit, 'L');
            assert.equal(res.body.returnNum, 2.64172);
            assert.equal(res.body.returnUnit, 'gal');
            assert.equal(res.body.string, "10 liters converts to 2.64172 gallons");
            done();
        });
    });

    test('Convert an invalid input', function(done){
        chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({input: "32g"})
        .end(function(err, res){
            
        })
    })

    test('Convert an invalid number', function(done){})

    test('Convert an invalid number and unit', function(done){})

    test('Convert with no number', function(done){})
});
