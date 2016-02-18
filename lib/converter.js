// imports
var utilsjs = require('./utils');

// Konvertiert eine ungeortnete oder geordnete Liste zur enstprechenden TeX Liste
function convertList() {
  var editor = utilsjs.getCurrentTab();
  // regex zur erkennung von listenaufzählung erzeugen
  var regexItemize = new RegExp('([-].+[\n]){1,}', 'gm');
  var regexEnumerate = new RegExp('([0-9].+[\n]){1,}', 'gm');
  var plainTextList = utilsjs.getSelectedWords();
  if (plainTextList !== '') {
    console.log(plainTextList);
    // regex auf einglesenen text anwenden
    var matchedItemize = regexItemize.exec(plainTextList);
    var matchedEnumerate = regexEnumerate.exec(plainTextList);
    // ersetzt alle spiegelstriche durch latex-item und fügt begin- und end-tag zum string hinzu
    if (matchedItemize != null) {
      var texifiedItemize = '\\begin{itemize}' + matchedItemize[0].toString().replace(/-/g, '\\item ') + '\\end{itemize}';
      editor.insertText(texifiedItemize.toString());
    }
    else if (matchedEnumerate != null) {
      var texifiedEnumerate = '\\begin{enumerate}' + matchedEnumerate[0].toString().replace(/[0-9]{1,3}[\.]/g, '\\item') + '\\end{enumerate}';
      editor.insertText(texifiedEnumerate.toString());
    }
    else {
      window.alert('No list structure found in selected text.');
    }
  }
  else {
    window.alert('No text selected for converting!');
  }
}

function makeItalic() {
  var selectedText = utilsjs.getSelectedWords();
  var editor = utilsjs.getCurrentTab();
  selectedText = [selectedText.slice(0, 0), '\\textit{', selectedText.slice(0)].join('');
  selectedText = [selectedText.slice(0, selectedText.length), '}', selectedText.slice(selectedText.length)].join('');
  editor.insertText(selectedText);
}
function makeBold() {
  var selectedText = utilsjs.getSelectedWords();
  var editor = utilsjs.getCurrentTab();
  selectedText = [selectedText.slice(0, 0), '\\textbf{', selectedText.slice(0)].join('');
  selectedText = [selectedText.slice(0, selectedText.length), '}', selectedText.slice(selectedText.length)].join('');
  editor.insertText(selectedText);
}
function makeUnderlined() {
  var selectedText = utilsjs.getSelectedWords();
  var editor = utilsjs.getCurrentTab();
  selectedText = [selectedText.slice(0, 0), '\\underline{', selectedText.slice(0)].join('');
  selectedText = [selectedText.slice(0, selectedText.length), '}', selectedText.slice(selectedText.length)].join('');
  editor.insertText(selectedText);
}
function makeTypewriter() {
  var selectedText = utilsjs.getSelectedWords();
  var editor = utilsjs.getCurrentTab();
  selectedText = [selectedText.slice(0, 0), '\\texttt{', selectedText.slice(0)].join('');
  selectedText = [selectedText.slice(0, selectedText.length), '}', selectedText.slice(selectedText.length)].join('');
  editor.insertText(selectedText);
}
function makeSmallCapitals() {
  var selectedText = utilsjs.getSelectedWords();
  var editor = utilsjs.getCurrentTab();
  selectedText = [selectedText.slice(0, 0), '\\textsc{', selectedText.slice(0)].join('');
  selectedText = [selectedText.slice(0, selectedText.length), '}', selectedText.slice(selectedText.length)].join('');
  editor.insertText(selectedText);
}

// exports
exports.convertList = convertList;
exports.makeItalic = makeItalic;
exports.makeBold = makeBold;
exports.makeUnderlined = makeUnderlined;
exports.makeTypewriter = makeTypewriter;
exports.makeSmallCapitals = makeSmallCapitals;
