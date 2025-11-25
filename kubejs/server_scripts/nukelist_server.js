ServerEvents.tags('item', e => {
   if (global.nukelist.length > 0) {
      e.removeAllTagsFrom(global.nukelist)  // Removes all tags from nuked items so they don't show up in tag viewers (EMI) or break recipes when removed
      e.add('oddyssey:nukelist', global.nukelist)  // Type your own pack name where it says modpack!
      e.add('c:hidden_from_recipe_viewers', global.nukelist) // Hides from EMI/JEI
   }
})

ServerEvents.tags('block', e => {
   if (global.nukelist.length > 0) {
      e.removeAllTagsFrom(global.nukelist)
      e.add('oddyssey:nukelist', global.nukelist) 
   }
})

ServerEvents.tags('fluid', e => {
   if (global.nukelist.length > 0) {
      e.removeAllTagsFrom(global.nukelist)
      e.add('oddyssey:nukelist', global.nukelist)
   }
})

ServerEvents.tags('entity_type', e => {
   if (global.nukelist.length > 0) {
      e.removeAllTagsFrom(global.nukelist)
      e.add('oddyssey:nukelist', global.nukelist)
   }
})


ServerEvents.recipes(e => {
   if (global.nukelist.length > 0) {
      e.remove({ input: global.nukelist }) // Removes any recipe this item is an INPUT in
      e.remove({ output: global.nukelist }) // Removes any recipe this item is an OUTPUT in
   }
})

PlayerEvents.chat(e => { // You can say "nukelist reload" in chat to reload all scripts, I'll probably change this at some point
   if (e.message == 'nukelist reload') {
      e.server.runCommand(`tell @a Now reloading Nukelist scripts`)
      e.server.runCommand(`kubejs reload startup-scripts`)
      e.server.runCommand(`reload`)
      e.server.runCommand(`kubejs reload lang`)
   }
})

LootJS.modifiers(e => {
   if (global.nukelist.length > 0) {
      for (const entry of global.nukelist) {
         e.addTableModifier(LootType.CHEST).removeLoot(Item.of(entry))
         e.addTableModifier(LootType.BLOCK).removeLoot(Item.of(entry))
         e.addTableModifier(LootType.ENTITY).removeLoot(Item.of(entry))
         e.addTableModifier(LootType.EQUIPMENT).removeLoot(Item.of(entry))
         e.addTableModifier(LootType.FISHING).removeLoot(Item.of(entry))
         e.addTableModifier(LootType.ARCHAEOLOGY).removeLoot(Item.of(entry))
         e.addTableModifier(LootType.GIFT).removeLoot(Item.of(entry))
         e.addTableModifier(LootType.VAULT).removeLoot(Item.of(entry))
         e.addTableModifier(LootType.SHEARING).removeLoot(Item.of(entry))
         e.addTableModifier(LootType.PIGLIN_BARTER).removeLoot(Item.of(entry))
      }
   }
})