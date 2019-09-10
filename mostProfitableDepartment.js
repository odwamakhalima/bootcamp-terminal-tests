module.exports = function(dep){
  var highProf = 0;
  var myProf = '';
  for(var i=0;i<dep.length;i++){
      var prof = dep[i].sales;
      if (prof > highProf){
          highProf = prof;
            if(highProf === dep[i].sales){
            myProf = (dep[i].department);
      }
  }
  }
    return(myProf)
  }