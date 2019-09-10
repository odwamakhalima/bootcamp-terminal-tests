module.exports = function(price){
	switch(price){
      case 'morning':
        return 'R20';
        break;
      case 'afternoon':
        return 'R10';
        break;
      default:
        return 'free';
  }
}