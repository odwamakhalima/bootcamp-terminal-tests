var assert = require('assert')
var total = require('../totalPhoneBill')

describe('function that returns the sum of total sms and calls',function(){
    it('should return the length of the calls made and multiply it with 2.75',function(){
        assert.equal(total('call,'),'R5.50');
    });
    it('should return the length of the sms made and multiply it with 0.65',function(){
        assert.equal(total('sms,'),'R3.40');
    });
    it('should return the length of sms and 2 calls and multiply sms with 0,65 and the calls with 2.75 then add them together',function(){
        assert.equal(total('sms,call,call'),'R6.15');
    });

});