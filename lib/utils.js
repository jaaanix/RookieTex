var File = require('atom').File;
var Directory = require('atom').Directory;

function getCurrentTab() {
  return atom.workspace.getActivePaneItem();
}

function getCurrentTabText(editor) {
  // text aus aktuellem editor-tab einlesen
  var writtenText = editor.getText();
  if (writtenText != null) {
    return writtenText;
  }
  else {
    return null;
  }
}

function insertIntoEditor() {

}

function getSelectedText() {
  var editor = this.getCurrentTab();
  return editor.getSelectedText();
}

// Simuliert druecken der Tab-Taste auf der Tastatur
function sendKeyboardTab() {
  var key;
  key = atom.keymaps.constructor.buildKeydownEvent('tab', {target: document.activeElement});
  return atom.keymaps.handleKeyboardEvent(key);
}

function createFile(filepath) {
  var file = new File(filepath, false).create();
  return file;
}

function createDirectory(dirpath) {
  var dir = new Directory(dirpath, false).create();
  return dir;
}

// exports
exports.createDirectory = createDirectory;
exports.createFile = createFile;
exports.getCurrentTab = getCurrentTab;
exports.getCurrentTabText = getCurrentTabText;
exports.insertIntoEditor = insertIntoEditor;
exports.getSelectedText = getSelectedText;
exports.sendKeyboardTab = sendKeyboardTab;
