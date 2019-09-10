var assert = require('assert') 
var isWeek = require('../isWeekday')
 
 describe('function that returns true if its not weekday' , function(){
    it('should return true if its sunday because its not a week day' , function(){
        assert.equal(isWeek('Sunday'), true);
    });
    it('should return false if its monday because its a week day' , function(){
        assert.equal(isWeek('Monday'), false);
    });
    it('should return true because saturday is not a week day' , function(){
        assert.equal(isWeek('Saturday'), true);

    });
});