var assert = require('assert')
var years = require('../yearsAgo')

describe('Function that returns difference between years' , function(){
    it('should return 43 because it should be 2019-1976=43' , function(){
        assert.equal(years(1976),43);
    });
    it('should return 59 because it should be the current year(2019)- the year i wanna check(1960)=59' , function(){
        assert.equal(years(1960),59);
    });
    it('should return 2019 because there is no other year so its 2019-0=2019' , function(){
        assert.equal(years(''),2019);
    });
});