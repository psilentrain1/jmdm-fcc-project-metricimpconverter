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
        .query({input: "10L"})
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
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, '32');
            assert.equal(res.body.initUnit, 'invalid unit');
            assert.equal(res.body.returnUnit, 'invalid unit');
            assert.equal(res.body.string, "invalid unit");
            done();
        })
    })

    test('Convert an invalid number', function(done){
        chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({input: "3/7.2/4kg"})
        .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 'invalid number');
            assert.equal(res.body.string, 'invalid number');
            done();
        })
    })

    test('Convert an invalid number and unit', function(done){
        chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({input: "3/7.2/4kilomegagram"})
        .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 'invalid number');
            assert.equal(res.body.initUnit, 'invalid unit');
            assert.equal(res.body.returnNum, 'invalid number');
            assert.equal(res.body.returnUnit, 'invalid unit');
            assert.equal(res.body.string, 'invalid number and unit');
            done();
        })
    })

    test('Convert with no number', function(done){
        chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({input: "kg"})
        .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 1);
            assert.equal(res.body.initUnit, "kg");
            assert.equal(res.body.returnNum, 2.20462);
            assert.equal(res.body.returnUnit, "lbs");
            assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds');
            done();
        })
    })
});
