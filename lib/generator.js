// imports
var utilsjs = require('./utils');

function addToc() {
  var editor = utilsjs.getCurrentTab();
  editor.moveToTop();
}

function startTexDocument() {
  var editor = utilsjs.getCurrentTab();
  editor.moveToTop();
  editor.insertText('\\begin{document}');
  editor.insertNewline();
  editor.moveToBottom();
  editor.insertText('\\end{document}');
  editor.moveToTop();
  editor.insertText('texdocclass');
  utilsjs.sendKeyboardTab();
}

function initailizeGlossary() {

}

function initializeTexProject() {

}

// exports
exports.addToc = addToc;
exports.startTexDocument = startTexDocument;
exports.initailizeGlossary = initailizeGlossary;
exports.initializeTexProject = initializeTexProject;
