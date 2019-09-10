let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Odwas name correctly', function(){
        assert.equal('Hello, Odwa', greet('Odwa'));
    });
    it('should greet jesses name correctly', function(){
       
        assert.equal('Hello, jesse', greet('jesse'));
    });
});