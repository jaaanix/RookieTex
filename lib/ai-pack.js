module.exports = {
  activate: function() {
    atom.commands.add('atom-workspace:convertToTex', this.convertToTex());
  },
  convertToTex: function() {
    // aktuell geöffneten atom-tab holen
    var editor = atom.workspace.getActivePaneItem();
    // text aus editor aktuellem editor-tab einlesen
    var writtenText = editor.getText();
    // regex für listenaufzählung erzeugen
    var re = new RegExp('([-].+[\n]){1,}', 'gm');
    // regex auf einglesenen text anwenden
    var matchedText = re.exec(writtenText);
    // regex matches ausgeben
    if (matchedText != null) {
      editor.insertText(matchedText.toString());
      console.log('Array länge:' + matchedText.length);
    }
    else {
      console.log('NO MATCHES!');
    }



    // if (re.test(writtenText) == true) {
    //   editor.insertText('Es gab einen match!');
    // }

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
