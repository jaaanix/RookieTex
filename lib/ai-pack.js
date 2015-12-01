// imports
var converterjs = require('./converter');
var utilsjs = require('./utils');
var templatesjs = require('./templates');

module.exports = {
  activate: function() {
    atom.commands.add('atom-workspace', 'ai-pack:convertToTex', this.convertToTex);
    atom.commands.add('atom-workspace', 'ai-pack:addSection', templatesjs.addSection);
    atom.commands.add('atom-workspace', 'ai-pack:addTable', templatesjs.addTable);
    atom.commands.add('atom-workspace', 'ai-pack:convertUnorderedList', converterjs.convertUnorderedList);

  },

  convertToTex: function() {

    var currentTab = utilsjs.getCurrentTab();
    // den geschriebenen Text mit dem aktuell aktiven Editor-Tab holen
    var writtenText = utilsjs.getCurrentTabText(currentTab);

    // regex zur erkennung von listenaufzählung erzeugen
    var regexItemize = new RegExp('([-].+[\n]){1,}', 'gm');
    var regexEnumerate = new RegExp('([0-9].+[\n]){1,}', 'gm');
    // regex auf einglesenen text anwenden
    var matchedItemize = regexItemize.exec(writtenText);
    var matchedEnumerate = regexEnumerate.exec(writtenText);
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
    return null;

  }
}
