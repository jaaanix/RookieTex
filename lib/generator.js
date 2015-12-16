// imports
var utilsjs = require('./utils');
var mkdirp = require('mkdirp');

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

function initializeGlossary() {
}

// creates directories and files for new latex-project
function initializeTexProject() {
  var projectDirs = [
    atom.config.get('ai-pack.rtInitialProjectPath') + '\\tex',
    atom.config.get('ai-pack.rtInitialProjectPath') + '\\img'
  ];

for (var i = 0; i < projectDirs.length; i++) {
  mkdirp(projectDirs[i], 0777);
}

/*
  var projectFiles = [
    atom.config.get('ai-pack.rtInitialProjectPath') + '/style.sty',
    atom.config.get('ai-pack.rtInitialProjectPath') + '/main.tex',
    atom.config.get('ai-pack.rtInitialProjectPath') + '/tex/glossary.tex',
    atom.config.get('ai-pack.rtInitialProjectPath') + '/tex/title.tex',
    atom.config.get('ai-pack.rtInitialProjectPath') + '/tex/content.tex'
  ];

  for (var j = 0; j < projectFiles.length; j++) {
    var = fileSuccess = utilsjs.createFile(projectFiles[j]);
    if (!fileSuccess) {
      alert('Not every file was created!');
    }
  }
  */
}

// exports
exports.addToc = addToc;
exports.startTexDocument = startTexDocument;
exports.initializeGlossary = initializeGlossary;
exports.initializeTexProject = initializeTexProject;
