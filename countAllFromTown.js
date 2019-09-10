module.exports =  function(reg, townTag){
    var myList2 = reg.split(',');
    var fromStellies = [];
    for(var i = 0;i < myList2.length;i++){
        if(myList2[i].startsWith('CL')){
          fromStellies.push(myList2[i]);
      }

  }
    return(fromStellies.length)
}