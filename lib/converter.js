// imports
var utilsjs = require('./utils');

// Converts a hyphens list to unordered TeX list
function convertList() {
  var editor = utilsjs.getCurrentTab();
  // regex zur erkennung von listenaufzählung erzeugen
  var regexItemize = new RegExp('([-].+[\n]){1,}', 'gm');
  var regexEnumerate = new RegExp('([0-9].+[\n]){1,}', 'gm');
  var plainTextList = utilsjs.getSelectedText();
  if (plainTextList != null) {
      console.log(plainTextList);
  }
  else {
    alert('No text selected!')

  }
  // regex auf einglesenen text anwenden
  var matchedItemize = regexItemize.exec(plainTextList);
  var matchedEnumerate = regexEnumerate.exec(plainTextList);
  // ersetzt alle spiegelstriche durch latex-item und fügt begin- und end-tag zum string hinzu
  if (matchedItemize != null) {
    var texifiedItemize = '\\begin{itemize}' + matchedItemize[0].toString().replace(/-/g, '\\item ') + '\\end{itemize}';
    editor.insertText(texifiedItemize.toString());
  }
  else if (matchedEnumerate != null) {
    var texifiedEnumerate = '\\begin{enumerate}' + matchedEnumerate[0].toString().replace(/[0-9\.]/g, '\\item') + '\\end{enumerate}';
    editor.insertText(texifiedEnumerate.toString());
  }
  else {
    console.log('NO MATCHES!');
  }
}

function makeItalic() {
  var selectedText = utilsjs.getSelectedText();
  var editor = utilsjs.getCurrentTab();
  editor.moveToBeginningOfWord();
  editor.insertText('\\textit{');
  editor.moveToEndOfWord();
  editor.insertText('}');
}

function makeBold() {
  var selectedText = utilsjs.getSelectedText();
  var editor = utilsjs.getCurrentTab();
  editor.moveToBeginningOfWord();
  editor.insertText('\\textbf{');
  editor.moveToEndOfWord();
  editor.insertText('}');
}

function makeUnderlined() {
  var selectedText = utilsjs.getSelectedText();
  var editor = utilsjs.getCurrentTab();
  editor.moveToBeginningOfWord();
  editor.insertText('\\underline{');
  editor.moveToEndOfWord();
  editor.insertText('}');
}

// exports
exports.convertList = convertList;
exports.makeItalic = makeItalic;
exports.makeBold = makeBold;
exports.makeUnderlined = makeUnderlined;
