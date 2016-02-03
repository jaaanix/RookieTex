// imports
var utilsjs = require('./utils');
var glossary = '\\newglossaryentry{entry name}{name={displayed name}, description={Definition of my entry}}';

function addToc() {
  var editor = utilsjs.getCurrentTab();
  editor.moveToTop();
  //TODO
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
    // erstellt Glossar-Datei mit den Parameter Pfad und Inhalt
    utilsjs.createFile(atom.config.get('ai-pack.rtInitialProjectPath') + '/tex/glossary.tex', glossary);
}

// creates directories and files for new latex-project
function initializeTexProject() {
  var projectDirs = [
    atom.config.get('ai-pack.rtInitialProjectPath') + '/tex',
    atom.config.get('ai-pack.rtInitialProjectPath') + '/img'
  ];

  // content for tex project files
  var main = '\\documentclass[12pt]{article} \n \\usepackage{style} \n \\include{tex/glossary} \n \\begin{document} \n \\include{tex/title} \n \\tableofcontents \n \\listoffigures \n \\include{tex/content} \n \\glsaddall{} \n \\setglossarystyle{altlist} \n \\printglossaries{} \n \\end{document}';

  var style = '\\ProvidesPackage{style} \n \\usepackage[utf8]{inputenc} \n \\usepackage[ngerman]{babel} \n \\usepackage[T1]{fontenc} \n \\usepackage{mathtools} \n \\usepackage{amsfonts} \n \\usepackage{amssymb} \n \\usepackage{graphicx} \n \\usepackage[usenames,dvipsnames,svgnames,table]{xcolor} \n \\usepackage{microtype} \n \\usepackage{float} \n \\usepackage{hyperref} \n \\usepackage{booktabs} \n \\usepackage{gensymb} \n \\usepackage{parskip} \n \\usepackage[xindy,toc]{glossaries} \n \\usepackage[xindy]{imakeidx} \n \\GlsSetXdyCodePage{duden-utf8} \n \\makeglossaries \n \\usepackage[toc,page]{appendix} \n \\addto\\captionsngerman{\\let\\appendixtocname\\appendixname\\let\\appendixpagename\\appendixname}';

  var title = '\\begin{titlepage} \n\\newcommand{\\HRule}{\\rule{\\linewidth}{0.5mm}} \n\\center \n\\textsc{\\LARGE Institue Name} \\\\[1.5cm] \n\\textsc{\\Large Department Name} \\\\[0.5cm] \n\\textsc{\\large Sub department name} \\\\ \n\\HRule  \\\\[0.4cm] \n{ \\huge \\bfseries Main topic} \\\\[0.4cm] \n\\HRule  \\\\[1.5cm] \n\\begin{minipage}{0.4\\textwidth} \n\\begin{flushleft} \\large \n\\emph{Author:} \\newline  \n\\textsc{firstname lastname} \n\\emph{Employee ID:} \n\\textsc{67891234} \n\\end{flushleft} \n\\end{minipage} \n\\hfill \n\\vfill \n{\\large \\today} \n\\end{titlepage}';

  //var glossary = '\\newglossaryentry{entry name}{name={displayed name}, description={Definition of my entry}}';

  var content = '\\chapter{Chapter One} \n \\section{One} \n Some Text';

  var projectFiles = [
    [atom.config.get('ai-pack.rtInitialProjectPath') + '/tex/title.tex', title],
    [atom.config.get('ai-pack.rtInitialProjectPath') + '/tex/content.tex', content],
    [atom.config.get('ai-pack.rtInitialProjectPath') + '/style.sty', style],
    [atom.config.get('ai-pack.rtInitialProjectPath') + '/main.tex', main]
  ];

  // Ist in den Pacakge-Einstellungen die Glossar-Initialierung aktiviert, wird eine Glossar-Datei angelegt
  if (atom.config.get('ai-pack.rtGenerateGlossary') == true) {
      // fuegt die zu erstellende Glossar-Datei inkl. dessen Inhalt dem projectFiles-Array hinzu
      projectFiles.push(
          [atom.config.get('ai-pack.rtInitialProjectPath') + '/tex/glossary.tex', glossary]
      );
  }

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
