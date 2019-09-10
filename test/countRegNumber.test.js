var assert = require('assert')    
var countReg = require('../countRegNumber')
    
    describe('function that checks number registration numbers' , function(){
        it('It should return 3 because there are 3 registration numbers' , function(){
            assert.equal(countReg('CJ7575,CY858787,CY9859876'),3);
        });
        it('It should return 2 because there are only 2 registration numbers' , function(){
            assert.equal(countReg('CJ7575,CY858787'),2);
        });
        it('It should return nothing because theres no input' , function(){
            assert.equal(countReg(''),0);
    
        });
    
    });