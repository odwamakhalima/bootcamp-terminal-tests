var assert = require('assert')
var fromWhere = require('../fromWhere')

describe('function that check registration number and returns where its from',function(){
    it('the function should return Cape Town because its registration number starts with CA',function(){
        assert.equal(fromWhere('CA'),'Cape Town');
    });
    it('the function should return Bellville because its registration number starts with CY',function(){
        assert.equal(fromWhere('CY'),'Bellville');
    });
    it('the function should return an empty string because there is no input',function(){
        assert.equal(fromWhere(''),'');
    });
});