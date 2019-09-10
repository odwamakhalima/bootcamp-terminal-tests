var assert = require('assert')
var fee = require('../transportFee')

describe('function that returns transport fee depending on the time of the day' , function(){
    it('should return transport fee in the morning which is R20' , function(){
        assert.equal(fee('morning'),'R20');
    });
    it('should return transport fee in the afternoon which is R10' , function(){
        assert.equal(fee('afternoon'),'R10');
    });
    it('should return free because they only charge money during morning and afternoon' , function(){
        assert.equal(fee('midnight'),'free');
    });
});