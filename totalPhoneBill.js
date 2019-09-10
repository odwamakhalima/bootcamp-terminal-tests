module.exports = function(bill){
	var billStr = bill.split(',');
  	var totalCalls = [];
  	var totalSms = [];
  	 	for(var i = 0;i < billStr.length;i++){
      	if(billStr[i].startsWith('sms')){
        	totalSms.push(billStr[i]);}
          else{
          	totalCalls.push(billStr[i]);
          	
          
        }
          
    } 
            var total1 = (totalSms.length * 0.65) + (totalCalls.length * 2.75);
  			return('R' + total1.toFixed(2)) 			
  
}