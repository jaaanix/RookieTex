var File = require('atom').File;
var Directory = require('atom').Directory;
var mkdirp = require('mkdirp');
var fs = require('fs');

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

// Holt alle Selections aus dem aktiven Tab und gibt den Text der ersten Selection (die aktuelle Auswahl) zurueck
function getSelectedWords() {
  var editor = this.getCurrentTab();
  var selections = editor.getSelections();
  return selections[0].getText();
}

// Simuliert druecken der Tab-Taste auf der Tastatur
function sendKeyboardTab() {
  var key;
  key = atom.keymaps.constructor.buildKeydownEvent('tab', {target: document.activeElement});
  return atom.keymaps.handleKeyboardEvent(key);
}

function createFile(filePath, fileContent) {
  fs.writeFile(filePath, fileContent, 'utf8', function(err) {
    if (err) console.error(err)
});
}

// creates directories synchronously to avoid race conditions with file creation
function createDirectory(dirPath) {
  mkdirp.sync(dirPath, function (err) {
    if (err) console.error(err)
});
}

// exports
exports.createDirectory = createDirectory;
exports.createFile = createFile;
exports.getCurrentTab = getCurrentTab;
exports.getCurrentTabText = getCurrentTabText;
exports.insertIntoEditor = insertIntoEditor;
exports.getSelectedWords = getSelectedWords;
exports.sendKeyboardTab = sendKeyboardTab;
