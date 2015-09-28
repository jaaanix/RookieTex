module.exports =
  activate: ->
    atom.commands.add 'atom-workspace', 'ai-pack:printtext': => @printtext()

  printtext: ->
    editor = atom.workspace.getActivePaneItem()
    editor.insertText("Hi my name is *scratching* slim shady")
