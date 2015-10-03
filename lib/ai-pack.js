module.exports = {
  activate: function() {
    atom.commands.add('atom-workspace:convertToTex', this.convertToTex());
  },
  convertToTex: function() {
    // aktuell geöffneten atom-tab holen
    var editor = atom.workspace.getActivePaneItem();
    // text aus editor aktuellem editor-tab einlesen
    var writtenText = editor.getText();
    // regex zur erkennung von listenaufzählung erzeugen
    var re = new RegExp('([-].+[\n]){1,}', 'gm');
    // regex auf einglesenen text anwenden
    var matchedText = re.exec(writtenText);
    // ersetzt alle spiegelstriche durch latex-item und fügt begin- und end-tag zum string hinzu
    if (matchedText != null) {
      console.log('Array länge:' + matchedText.length);
      var texifiedList = '\\begin{itemize}' + matchedText[0].toString().replace(/-/g, '\\item ') + '\\end{itemize}';
      editor.insertText(texifiedList.toString());
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
