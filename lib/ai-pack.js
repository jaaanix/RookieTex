// imports
var converterjs = require('./converter');
var utilsjs = require('./utils');
var templatesjs = require('./templates');

module.exports = {
  activate: function() {
    atom.commands.add('atom-workspace', 'ai-pack:convertListToTex', converterjs.convertList);
    atom.commands.add('atom-workspace', 'ai-pack:addSection', templatesjs.addSection);
    atom.commands.add('atom-workspace', 'ai-pack:addTable', templatesjs.addTable);
    atom.commands.add('atom-workspace', 'ai-pack:addUnorderedList', templatesjs.addUnorderedList);
  }
}
