

ServerEvents.recipes(event => {

// shaped crafting

    event.shaped(Item.of('minecraft:lead', 2), ['SS ','SS ', '  S'], { S: 'minecraft:string' })
    event.shaped(Item.of('minecraft:lead', ), ['SS ','SS ', '  S'], { S: 'farmersdelight:straw' })
    event.shaped(Item.of('minecraft:recovery_compass'), [' E ','ECE',' E '], {E: 'minecraft:echo_shard', C: 'minecraft:compass'})

    event.shaped(Item.of('minecraft:prismarine', 4), ['PP', 'PP'], {P: 'minecraft:prismarine_shard'})
    event.shaped(Item.of('minecraft:dark_prismarine', 8), ['PPP','PIP', 'PPP'], {P: 'minecraft:prismarine_shard', I: 'minecraft:ink_sac'})
    event.shaped(Item.of('minecraft:prismarine_bricks', 4), ['PP', 'PP'], {P: 'minecraft:prismarine'})

    event.shaped(Item.of('minecraft:stone_sword'), ['C', 'C', 'S'], {C: 'minecraft:copper_ingot', S: 'minecraft:stick'})
    event.shaped(Item.of('minecraft:stone_pickaxe'), ['CCC', ' S ', ' S '], {C: 'minecraft:copper_ingot', S: 'minecraft:stick'})
    event.shaped(Item.of('minecraft:stone_axe'), ['CC ', 'CS ', ' S '], {C: 'minecraft:copper_ingot', S: 'minecraft:stick'})
    event.shaped(Item.of('minecraft:stone_hoe'), ['CC ', ' S ', ' S '], {C: 'minecraft:copper_ingot', S: 'minecraft:stick'})
    event.shaped(Item.of('minecraft:stone_shovel'), ['C', 'S', 'S'], {C: 'minecraft:copper_ingot', S: 'minecraft:stick'})

    event.shaped(Item.of('minecraft:leather_helmet'), ['LCL', 'L L'], {L: 'minecraft:leather', C: 'farmersdelight:canvas'})
    event.shaped(Item.of('minecraft:leather_chestplate'), ['L L', 'LCL', 'LCL'], {L: 'minecraft:leather', C: 'farmersdelight:canvas'})
    event.shaped(Item.of('minecraft:leather_leggings'), ['LLL', 'C C', 'L L'], {L: 'minecraft:leather', C: 'farmersdelight:canvas'})
    event.shaped(Item.of('minecraft:leather_boots'), ['L L', 'C C'], {L: 'minecraft:leather', C: 'farmersdelight:canvas'})

    event.shaped(Item.of('minecraft:chain', 4), ['N','I', 'N'], { I:'minecraft:iron_ingot', N: 'minecraft:iron_nugget' })

    event.shaped(Item.of('minecraft:chainmail_helmet'), ['CCC', 'C C'], { C:'minecraft:chain'})
    event.shaped(Item.of('minecraft:chainmail_chestplate'), ['C C', 'CCC', 'CCC'], { C:'minecraft:chain'})
    event.shaped(Item.of('minecraft:chainmail_leggings'), ['CCC', 'C C', 'C C'], { C:'minecraft:chain'})
    event.shaped(Item.of('minecraft:chainmail_boots'), ['C C', 'C C'], { C:'minecraft:chain'})

    event.shaped(Item.of('minecraft:crafting_table'), ['CC', 'WW'], {C:'farmersdelight:canvas', W:'#minecraft:planks'})
    
    event.shaped(Item.of('minecraft:lantern'), [' I ', 'ITI', ' I '], {I:'minecraft:iron_nugget', T:'minecraft:torch'})
    event.shaped(Item.of('minecraft:soul_lantern'), [' I ', 'ITI', ' I '], {I:'minecraft:iron_nugget', T:'minecraft:soul_torch'})
    event.shaped(Item.of('enderscape:bulb_lantern'), [' I ', 'IBI', ' I '], {I:'minecraft:iron_nugget', B:'enderscape:bulb_flower'})
    

    event.shaped(Item.of('minecraft:bricks', 4), ['BB', 'BB'], {B:'minecraft:brick'})
    event.shaped(Item.of('supplementaries:ash_bricks', 4), ['BB', 'BB'], {B:'supplementaries:ash_brick'})
    


    event.shaped(Item.of('farmersdelight:cutting_board'), ['SS', 'WW'], {S: 'minecraft:stick', W: '#minecraft:planks'})

    event.shaped(Item.of('enchant_revised:enchant_altar'), [' B ', 'QAQ', 'DDD'], {B : 'minecraft:book', Q: 'minecraft:quartz', A: 'minecraft:amethyst_shard', D: 'minecraft:deepslate'})

// shapeless crafting
    event.shapeless('4x minecraft:clay_ball', ['minecraft:clay'])
    event.shapeless('supplementaries:netherite_door', ['blockbox:golden_door', 'minecraft:netherite_scrap'])
    event.shapeless('supplementaries:netherite_trapdoor', ['blockbox:golden_trapdoor', 'minecraft:netherite_scrap'])

  })