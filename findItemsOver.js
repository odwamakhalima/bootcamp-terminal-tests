module.exports = function(itemList){
    var listQty2 = [];
  	for(var i = 0;i < itemList.length;i++){
      	if(25< itemList[i].qty){
          listQty2.push(itemList[i]);
          
	}
    }
      return(listQty2)
}