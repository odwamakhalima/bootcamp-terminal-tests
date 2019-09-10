var assert = require('assert')  
var bell = require('../isFromBellville')
  
  describe('function that test registration number if Is from bellvile' , function(){
    it('it should return true because the registration number starts with CY' , function(){
        assert.equal(bell('CY878969'), true);
      });
    it('it should return false because the registration number does not starts with CY' , function(){
        assert.equal(bell('CA878969'), false);
      });
    it('it should return false because there is no registration number' , function(){
        assert.equal(bell(''), false);
    });

});