var assert = require('assert')
var countTown = require('../countAllFromTown')

describe('function that returns number of registration numbers from town' , function(){
    it('It should return 3 because there are 3 registration numbers from town' , function(){
        assert.equal(countTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
    });
    it('It should return zero because no registration starts with CL' , function(){
        assert.equal(countTown('CY 567,CJ 456','CL'),0);
    });
    it('It should return zero because there is no registration number' , function(){
        assert.equal(countTown(''),0);
    });

});