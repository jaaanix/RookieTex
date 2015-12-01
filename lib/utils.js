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

// exports
exports.getCurrentTab = getCurrentTab;
exports.getCurrentTabText = getCurrentTabText;
exports.insertIntoEditor = insertIntoEditor;
exports.getSelectedText = getSelectedText;
