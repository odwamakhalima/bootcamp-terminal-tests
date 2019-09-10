var assert = require('assert')
var findItemsOver20 = require('../findItemsOver20')

describe('function that checks items with over 20 quality',function(){
    it('test the items with more that 20 quality and should return pears because its the only one with quality over 20',function(){
        assert.equal(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},]),"pears");
    });
    it('test the items with more that 20 quality and should return bananas because its the only one with quality over 20',function(){
        assert.equal(findItemsOver20([{"name":"bananas","qty":27},{"name":"apples","qty":3}]),"bananas");
    });
    it('test the items with more that 20 quality and return an empty list because theres no item with over 20 quality',function(){
        assert.deepEqual(findItemsOver20([{"name":"bananas","qty":6},{"name":"apples","qty":7}]),[]);
    });
});