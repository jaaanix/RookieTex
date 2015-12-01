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

  //EINLESEN EINER DATEI
  // var client = new XMLHttpRequest();
  // client.open('GET', 'file:///home/janis/Dokumente/Repos/ai-pack/lib/test.txt');
  // client.onreadystatechange = function() {
  //           var allText = client.responseText;
  //           //alert(allText);
  //           editor.insertText(allText);
  //       }
  // client.send();
}

// exports
exports.convertList = convertList;
