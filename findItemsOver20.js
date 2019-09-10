module.exports = function(items){
  	var myQty = 20;
  	var listQty = [];
  	for(var i = 0;i < items.length;i++){
      	if(myQty< items[i].qty){
          listQty.push(items[i].name);
          
    }
    }
  		return(listQty)
}