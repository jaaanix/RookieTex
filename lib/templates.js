// imports
var templatesjs = require('./templates');
var utilsjs = require('./utils');

function addTable() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("textable");
}

function addUnorderedList() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("texlist");
}

function addSection() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("log");
}

// exports
exports.addTable = addTable;
exports.addUnorderedList = addUnorderedList;
exports.addSection = addSection;
//module.exports = { fun1: fun1, fun2: fun2}
