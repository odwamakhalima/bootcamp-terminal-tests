var assert = require('assert')
var findItems = require('../findItemsOver')


describe('function that checks items with over 25 quality',function(){
    it('test the item with the most quality and should return bananas because its the one with quality over 25',function(){
        assert.deepEqual(findItems([
            {name : 'apples', qty : 10},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]),[{name : 'bananas', qty : 27}]);
    });
    it('test the item with the most quality and should return apples because its the one with quality over 25',function(){
        assert.deepEqual(findItems([
            {name : 'apples', qty : 10},
            {name : 'bananas', qty : 3},
            {name : 'apples', qty : 33},
        ]),[{name : 'apples', qty : 33}]);
    });
});