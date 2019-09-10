var assert = require('assert')
var reg = require('../regCheck') 
 
 
 describe('function should return true if the registration number ends GP' , function(){
    it('should return true because the registration number ends with GP' , function(){
        assert.equal(reg('DV 23 NB GP', 'GP'),true);
    });
    it('should return false because the registration number does not have GP' , function(){
        assert.equal(reg('DV 23 NB ', 'GP'),false);
    });
    it('should return false because the registration number does not end with GP' , function(){
        assert.equal(reg('DV 23 NB CJ', 'GP'),false);

    });

});