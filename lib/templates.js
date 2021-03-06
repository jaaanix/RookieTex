// imports
var utilsjs = require('./utils');

function addTable() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('textable');
  utilsjs.sendKeyboardTab();
}

function addUnorderedList() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texlist');
  utilsjs.sendKeyboardTab();
}

function addChapter() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texch');
  utilsjs.sendKeyboardTab();
}

function addSection() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texsec');
  utilsjs.sendKeyboardTab();
}

function addSubSection() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texsubsec');
  utilsjs.sendKeyboardTab();
}

function addImage() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('teximg');
  utilsjs.sendKeyboardTab();
}

function addMathInlineMode() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texmathinline');
  utilsjs.sendKeyboardTab();
}

function addMathDisplayMode() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texmathdisplay');
  utilsjs.sendKeyboardTab();
}

function addPackage() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texpackage');
  utilsjs.sendKeyboardTab();
}

function addNewPage() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texnewpage');
  utilsjs.sendKeyboardTab();
}

function addGlossaryEntry() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texglossaryentry');
  utilsjs.sendKeyboardTab();
}

function addDoubleQuotes() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texdoublequotes');
  utilsjs.sendKeyboardTab();
}

function addUrlLink() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texurllink');
  utilsjs.sendKeyboardTab();
}

function addBegin() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texbegin');
  utilsjs.sendKeyboardTab();
}

function addOrderedList() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texolist');
  utilsjs.sendKeyboardTab();
}

function addBackslash() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texbackslash');
  utilsjs.sendKeyboardTab();
}

function addCodeSnippet() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texinscode');
  utilsjs.sendKeyboardTab();
}

function addFigure() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texfig');
  utilsjs.sendKeyboardTab();
}

function addMinipage() {
  var editor = utilsjs.getCurrentTab();
  editor.insertText('texminipage');
  utilsjs.sendKeyboardTab();
}

// exports
exports.addTable = addTable;
exports.addUnorderedList = addUnorderedList;
exports.addChapter = addChapter;
exports.addSection = addSection;
exports.addSubSection = addSubSection;
exports.addImage = addImage;
exports.addMathInlineMode = addMathInlineMode;
exports.addMathDisplayMode = addMathDisplayMode;
exports.addPackage = addPackage;
exports.addNewPage = addNewPage;
exports.addGlossaryEntry = addGlossaryEntry;
exports.addDoubleQuotes = addDoubleQuotes;
exports.addUrlLink = addUrlLink;
exports.addBegin = addBegin;
exports.addOrderedList = addOrderedList;
exports.addBackslash = addBackslash;
exports.addCodeSnippet = addCodeSnippet;
exports.addFigure = addFigure;
exports.addMinipage = addMinipage;
// module.exports = { fun1: fun1, fun2: fun2}
