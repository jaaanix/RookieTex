// imports
var utilsjs = require('./utils');

// Converts a hyphens list to unordered TeX list
function convertUnorderedList() {
  var plainTextList = utilsjs.getSelectedText();
  if (plainTextList != null) {
      console.log(plainTextList);
  }
  else {
    alert('No text selected!')

  }
}

// exports
exports.convertUnorderedList = convertUnorderedList;
