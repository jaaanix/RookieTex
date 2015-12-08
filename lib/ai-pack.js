// imports
var converterjs = require('./converter');
var utilsjs = require('./utils');
var templatesjs = require('./templates');
var generatorjs = require('./generator');

module.exports = {
  activate: function() {
    atom.commands.add('atom-workspace', 'ai-pack:convertListToTex', converterjs.convertList);
    atom.commands.add('atom-workspace', 'ai-pack:addSection', templatesjs.addSection);
    atom.commands.add('atom-workspace', 'ai-pack:addTable', templatesjs.addTable);
    atom.commands.add('atom-workspace', 'ai-pack:addUnorderedList', templatesjs.addUnorderedList);
    atom.commands.add('atom-workspace', 'ai-pack:addToc', generatorjs.addToc);
    atom.commands.add('atom-workspace', 'ai-pack:startTexDocument', generatorjs.startTexDocument);
    atom.commands.add('atom-workspace', 'ai-pack:addImage', templatesjs.addImage);
    atom.commands.add('atom-workspace', 'ai-pack:makeItalic', converterjs.makeItalic);
    atom.commands.add('atom-workspace', 'ai-pack:makeBold', converterjs.makeBold);
    atom.commands.add('atom-workspace', 'ai-pack:makeUnderlined', converterjs.makeUnderlined);
  }
}
