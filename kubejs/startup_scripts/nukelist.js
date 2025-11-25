 global.nukelist = [ 

    // items
    "blockbox:brazier",
    "blockbox:soul_brazier",
    "primal:straw_bale",
    "primal:seashells",
    "primal:short_river_reeds",
    "primal:river_reeds",

    // blocksets




    // - woodtypes









    // - nether stuff


    // - end stuff


// I like to separate the different things by registry type, so below could be the fluid section

     // Last option can end with a comma

]
const woodenBlocks = [
  'slab', 'stairs', 'fence', 'fence_gate', 'button', 'pressure_plate',
  'chest_boat', 'boat', 'trapdoor', 'door', 'planks',
]
/*for (const type of woodenBlocks) {
  global.nukelist.push(`bountifulfares:walnut_${type}`)
}


// /ecologics.*flowering_azalea/,  Will remove everything with an ID containing "ecologics" and "flowering_azalea", effectively nuking the Ecologics Flowering Azalea woodtype. The .* seperates the 2 bits.
// /minecraft.*acacia/,  Will remove everything with an ID containing "minecraft" and "acacia", effectively nuking the Vanilla Acacia woodtype.
// /acacia/, // You don't need the modid at all actually, it's just useful in case you have 2 woodtypes with the same name from different mods (e.g ecologics:azalea and quark:azalea) and you only want to remove one.
// /quark.*limestone/,  Just for fun, you can nuke everything from Quark that contains "limestone" in the ID 
// CAUTION: This can end up removing things you don't want to accidentally. For example, if you wanted to remove Lead (the metal) from your modpack, and put in /lead/, it will remove Minecraft Leads as well because their ID is minecraft:lead. Be careful!

/*for (const colour of dyeColours) {
    global.nukelist.push(`examplefurnituremod:${colour}_coloured_thing`)
    global.nukelist.push(`examplefurnituremod:${colour}_coloured_second_thing`) 
}*/

// Below would nuke all coloured_third_thing in every colour except for blue
/*for (const colour of dyeColours) {
    if (colour !== 'blue') {
      global.nukelist.push(`examplefurnituremod:${colour}_coloured_third_thing`)
    }
}*/

// To use these item nuking scripts, type the IDs of items you want to disable in the space above. 
// Then, type 'nukelist reload', which will run these commands: (this is a custom script as well)
// /kubejs reload startup-scripts
// /reload
// /kubejs reload lang

// Can nuke Items, Blocks, Fluids, Entities
 