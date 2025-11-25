ItemEvents.modification(event => {

    event.modify('minecraft:wooden_shovel', item => {
        let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded(
            "minecraft:player.mining_efficiency", 
            { amount: 1.4, id: "minecraft:base_mining_efficiency", operation: "add_value" },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.attack_knockback", 
            { amount: 1.5, id: "minecraft:base_attack_knockback", operation: "add_value" },
            "mainhand"
        )
        // Apply them to the item. 
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
    })
    event.modify('minecraft:stone_shovel', item => {
        let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded(
            "minecraft:generic.attack_knockback", 
            { amount: 1.0, id: "minecraft:base_attack_knockback", operation: "add_value" },
            "mainhand"
        )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
    })
    event.modify('minecraft:iron_shovel', item => {
        let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded(
            "minecraft:generic.attack_knockback", 
            { amount: 1.0, id: "minecraft:base_attack_knockback", operation: "add_value" },
            "mainhand"
        )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
    })
    event.modify('minecraft:golden_shovel', item => {
        let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded(
            "minecraft:generic.attack_knockback", 
            { amount: 1.0, id: "minecraft:base_attack_knockback", operation: "add_value" },
            "mainhand"
        )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
    })
    event.modify('minecraft:diamond_shovel', item => {
        let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded(
            "minecraft:generic.attack_knockback", 
            { amount: 1.0, id: "minecraft:base_attack_knockback", operation: "add_value" },
            "mainhand"
        )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
    })
    event.modify('minecraft:netherite_shovel', item => {
        let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded(
            "minecraft:generic.attack_knockback", 
            { amount: 1.0, id: "minecraft:base_attack_knockback", operation: "add_value" },
            "mainhand"
        )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
    })
    event.modify('minecraft:wooden_pickaxe', item => {
        let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded(
            "minecraft:player.mining_efficiency", 
            { amount: 1.4, id: "minecraft:base_mining_efficiency", operation: "add_value" },
            "mainhand"
        )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
    })
    event.modify('minecraft:wooden_axe', item => {
        let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded(
            "minecraft:player.mining_efficiency", 
            { amount: 1.4, id: "minecraft:base_mining_efficiency", operation: "add_value" },
            "mainhand"
        )
        // Apply them to the item. 
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
    })
    event.modify('minecraft:wooden_hoe', item => {
        let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded(
            "minecraft:player.mining_efficiency", 
            { amount: 1.4, id: "minecraft:base_mining_efficiency", operation: "add_value" },
            "mainhand"
        )
        // Apply them to the item. 
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
    })
}) 