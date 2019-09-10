module.exports = function(reg){
	switch(reg){
      case 'CY':
        return 'Bellville';
        break;
      case 'CJ':
        return 'Paarl';
        break;
      case 'CA':
        return 'Cape Town';
        break;
        case '':
        return '';
        break;
      default:
        return 'Some other place!'
              }
}