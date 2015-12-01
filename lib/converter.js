// imports
var utilsjs = require('./utils');

// Converts a hyphens list to unordered TeX list
function convertUnorderedList() {
  var plainTextList = utilsjs.getSelectedText();
  console.log(plainTextList);
}

// exports
exports.convertUnorderedList = convertUnorderedList;
