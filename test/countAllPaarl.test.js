var assert = require('assert')
var countPaarl = require('../countAllPaarl')

describe('function that return number of registrations from paarl' , function(){
    it('It should return 3 because there are 3 registration numbers from paarl' , function(){
        assert.equal(countPaarl("CJ 345,CJ 2345,CL 7756"), 2);
    });
    it('It should return zero because there is no input' , function(){
        assert.equal(countPaarl(""), 0);
    });
    it('It should return 3 because there are 3 registration numbers from paarl' , function(){
        assert.equal(countPaarl("CJ 345,CJ 2345,CJ 7756"), 3);

    });

});