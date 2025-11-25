ItemEvents.modification(event => {

    event.modify('minecraft:turtle_helmet', item => {
        let modifiedAttributeModifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded("minecraft:player.submerged_mining_speed", 
            { amount: 0.5, id: "1759197519258", operation: "add_value" },
            "head"
        )
        // Apply them to the item. 
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifiers.modifiers())
    })

})