module.exports = function countAllPaarl(reg){
	var myList2 = reg.split(',');
  	var myPaarl = [];
  	for(var i = 0;i<myList2.length;i++){
    	if(myList2[i].startsWith('CJ')){
        	myPaarl.push(myList2[i]);	
        }
    }
  		return(myPaarl.length);
}