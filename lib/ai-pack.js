// imports
var converterjs = require('./converter');
var templatesjs = require('./templates');
var generatorjs = require('./generator');

module.exports = {
  config: {
    rtInitialProjectPath: {
      title: 'Absolute project path of your latex project',
      type: 'string',
      'default': 'C:\\my-latex-project'
    },
    rtGenerateEasyCodeInsert: {
      title: 'Inlcude an easy way to add code to your latex project',
      type: 'boolean',
      'default': true
    },
    rtGenerateGlossary: {
      title: 'Generate glossary on latex project initialization',
      type: 'boolean',
      'default': true
    }
  },

  activate: function () {
    atom.commands.add('atom-workspace', 'ai-pack:convertListToTex', converterjs.convertList);
    atom.commands.add('atom-workspace', 'ai-pack:makeBold', converterjs.makeBold);
    atom.commands.add('atom-workspace', 'ai-pack:makeItalic', converterjs.makeItalic);
    atom.commands.add('atom-workspace', 'ai-pack:makeUnderlined', converterjs.makeUnderlined);
    atom.commands.add('atom-workspace', 'ai-pack:addToc', generatorjs.addToc);
    atom.commands.add('atom-workspace', 'ai-pack:initializeGlossary', generatorjs.initializeGlossary);
    atom.commands.add('atom-workspace', 'ai-pack:initializeTexProject', generatorjs.initializeTexProject);
    atom.commands.add('atom-workspace', 'ai-pack:startTexDocument', generatorjs.startTexDocument);
    atom.commands.add('atom-workspace', 'ai-pack:addChapter', templatesjs.addChapter);
    atom.commands.add('atom-workspace', 'ai-pack:addDoubleQuotes', templatesjs.addDoubleQuotes);
    atom.commands.add('atom-workspace', 'ai-pack:addGlossaryEntry', templatesjs.addGlossaryEntry);
    atom.commands.add('atom-workspace', 'ai-pack:addImage', templatesjs.addImage);
    atom.commands.add('atom-workspace', 'ai-pack:addMathInlineMode', templatesjs.addMathInlineMode);
    atom.commands.add('atom-workspace', 'ai-pack:addMathDisplayMode', templatesjs.addMathDisplayMode);
    atom.commands.add('atom-workspace', 'ai-pack:addNewPage', templatesjs.addNewPage);
    atom.commands.add('atom-workspace', 'ai-pack:addPackage', templatesjs.addPackage);
    atom.commands.add('atom-workspace', 'ai-pack:addSection', templatesjs.addSection);
    atom.commands.add('atom-workspace', 'ai-pack:addSubSection', templatesjs.addSubSection);
    atom.commands.add('atom-workspace', 'ai-pack:addTable', templatesjs.addTable);
    atom.commands.add('atom-workspace', 'ai-pack:addUnorderedList', templatesjs.addUnorderedList);
    atom.commands.add('atom-workspace', 'ai-pack:addUrlLink', templatesjs.addUrlLink);
  }
};
