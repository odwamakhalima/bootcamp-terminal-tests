module.exports = function(anything){
  console.log(anything);
   var too = anything.split(',')
   if(anything.startsWith('C')){
    return(too.length)
   }
   else{
    return 0
   }
  }