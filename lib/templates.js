// imports
var templatesjs = require('./templates');
var utilsjs = require('./utils');

function addTable() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("textable");
  utilsjs.sendKeyboardTab();
}

function addUnorderedList() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("texlist");
  utilsjs.sendKeyboardTab();
}


function addSection() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("texsec");
  utilsjs.sendKeyboardTab();
}

function addSubSection() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("texsubsec");
  utilsjs.sendKeyboardTab();
}

function addImage() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("teximg");
  utilsjs.sendKeyboardTab();
}

function addMathInlineMode() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("texmathinline");
  utilsjs.sendKeyboardTab();
}

function addMathDisplayMode() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("texmathdisplay");
  utilsjs.sendKeyboardTab();
}

function addPackage() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("texpackage");
  utilsjs.sendKeyboardTab();
}

function addNewPage() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("texnewpage");
  utilsjs.sendKeyboardTab();
}

function addGlossaryEntry() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText("texglossaryentry");
  utilsjs.sendKeyboardTab();
}

// exports
exports.addTable = addTable;
exports.addUnorderedList = addUnorderedList;
exports.addSection = addSection;
exports.addImage = addImage;
exports.addMathInlineMode = addMathInlineMode;
exports.addMathDisplayMode = addMathDisplayMode;
exports.addPackage = addPackage;
exports.addNewPage = addNewPage;
exports.addGlossaryEntry = addGlossaryEntry;
//module.exports = { fun1: fun1, fun2: fun2}
