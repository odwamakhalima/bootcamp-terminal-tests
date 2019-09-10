var assert = require('assert')
var mostProfitableDepartment = require('../mostProfitableDepartment')

describe('function return the department with most sales per day',function(){
    it('should return hardware because its the one with most sales',function(){
        assert.equal(mostProfitableDepartment([{"department":"carpentry","sales":5500,"day":"Monday"},{"department":"hardware","sales":7500,"day":"Tuesday"}]),'hardware');
    });
    it('should return carpentry because its the one with most sales',function(){
        assert.equal(mostProfitableDepartment([{"department":"carpentry","sales":5500,"day":"Monday"},{"department":"hardware","sales":500,"day":"Tuesday"}]),'carpentry');
    });
    it('should return technology because its the one with most sales',function(){
        assert.equal(mostProfitableDepartment([{"department":"carpentry","sales":500,"day":"Monday"},{"department":"technology","sales":7500,"day":"Tuesday"}]),'technology');
    });
});