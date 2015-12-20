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

function initializeGlossary() {}

// creates directories and files for new latex-project
function initializeTexProject() {
  var projectDirs = [
    atom.config.get('ai-pack.rtInitialProjectPath') + '\\tex',
    atom.config.get('ai-pack.rtInitialProjectPath') + '\\img'
  ];

  var projectFiles = [
    [atom.config.get('ai-pack.rtInitialProjectPath') + '\\tex\\title.tex', 'jaaanix'],
    [atom.config.get('ai-pack.rtInitialProjectPath') + '\\tex\\glossary.tex', 'jaaanix'],
    [atom.config.get('ai-pack.rtInitialProjectPath') + '\\tex\\content.tex', 'jaaanix'],
    [atom.config.get('ai-pack.rtInitialProjectPath') + '\\style.sty', 'jaaanix'],
    [atom.config.get('ai-pack.rtInitialProjectPath') + '\\main.tex', 'jaaanix']
  ];

  for (var i = 0; i < projectDirs.length; i++) {
    utilsjs.createDirectory(projectDirs[i]);
  }

  for (var j = 0; j < projectFiles.length; j++) {
    utilsjs.createFile(projectFiles[j][0], projectFiles[j][1]);
  }

}

// exports
exports.addToc = addToc;
exports.startTexDocument = startTexDocument;
exports.initializeGlossary = initializeGlossary;
exports.initializeTexProject = initializeTexProject;
