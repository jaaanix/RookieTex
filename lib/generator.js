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

function initailizeGlossary() {

}

// creates directories and files for new latex-project
function initializeTexProject() {
  var projectDir = 'D:\\my-latex-project';
  var subDirTex = 'D:\\my-latex-project\\tex';
  var subDirImg = 'D:\\my-latex-project\\img';
  utilsjs.createDirectory(projectDir);
  utilsjs.createDirectory(subDirImg);
  utilsjs.createDirectory(subDirImg);
  utilsjs.createFile('D:\\my-latex-project\\style.sty');
  utilsjs.createFile('D:\\my-latex-project\\main.tex');
  utilsjs.createFile('D:\\my-latex-project\\tex\\glossary.tex');
  utilsjs.createFile('D:\\my-latex-project\\tex\\title.tex');
  utilsjs.createFile('D:\\my-latex-project\\tex\\content.tex');
  alert(atom.config.get('ai-pack.rtInitialProjectPath'));
}

// exports
exports.addToc = addToc;
exports.startTexDocument = startTexDocument;
exports.initailizeGlossary = initailizeGlossary;
exports.initializeTexProject = initializeTexProject;
