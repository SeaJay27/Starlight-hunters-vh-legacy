onEvent ('recipes', event => {

    // Nuggets from ingots
event.shapeless(
  Item.of('thermal:electrum_nugget', 9),
  [
    'thermal:electrum_ingot'
  ]
);
event.shapeless(
  Item.of('immersiveengineering:nugget_electrum', 9),
  [
    'immersiveengineering:ingot_electrum'
  ]
);
event.shapeless(
  Item.of('mekanism:nugget_steel', 9),
  [
    'mekanism:ingot_steel'
  ]
);
event.shapeless(
  Item.of('immersiveengineering:nugget_steel', 9),
  [
    'immersiveengineering:ingot_steel'
  ]
);
event.shapeless(
  Item.of('thermal:constantan_nugget', 9),
  [
    'thermal:constantan_ingot'
  ]
);
event.shapeless(
  Item.of('immersiveengineering:nugget_constantan', 9),
  [
    'immersiveengineering:ingot_constantan'
  ]
);
event.shapeless(
  Item.of('mekanism:nugget_uranium', 9),
  [
    'mekanism:ingot_uranium'
  ]
);
event.shapeless(
  Item.of('immersiveengineering:nugget_uranium', 9),
  [
    'immersiveengineering:ingot_uranium'
  ]
);
event.shapeless(
  Item.of('immersiveengineering:nugget_nickel', 9),
  [
    'immersiveengineering:ingot_nickel'
  ]
);
event.shapeless(
  Item.of('thermal:nickel_nugget', 9),
  [
    'thermal:nickel_ingot'
  ]
);
event.shapeless(
  Item.of('immersiveengineering:nugget_silver', 9),
  [
    'immersiveengineering:ingot_silver'
  ]
);
event.shapeless(
  Item.of('thermal:silver_nugget', 9),
  [
    'thermal:silver_ingot'
  ]
);
event.shapeless(
  Item.of('thermal:lead_nugget', 9),
  [
    'thermal:lead_ingot'
  ]
);
event.shapeless(
  Item.of('immersiveengineering:nugget_lead', 9),
  [
    'immersiveengineering:ingot_lead'
  ]
);
event.shapeless(
  Item.of('thermal:copper_nugget', 9),
  [
    'thermal:copper_ingot'
  ]
);
event.shapeless(
  Item.of('mekanism:nugget_copper', 9),
  [
    'mekanism:ingot_copper'
  ]
);
event.shapeless(
  Item.of('immersiveengineering:nugget_copper', 9),
  [
    'immersiveengineering:ingot_copper'
  ]
);
event.shapeless(
  Item.of('create:copper_nugget', 9),
  [
    'create:copper_ingot'
  ]
);
event.shapeless(
  Item.of('mekanism:nugget_bronze', 9),
  [
    'mekanism:ingot_bronze'
  ]
);
event.shapeless(
  Item.of('thermal:bronze_nugget', 9),
  [
    'thermal:bronze_ingot'
  ]
);
event.shapeless(
  Item.of('mekanism:nugget_tin', 9),
  [
    'mekanism:ingot_tin'
  ]
);
event.shapeless(
  Item.of('thermal:tin_nugget', 9),
  [
    'thermal:tin_ingot'
  ]
);

// Dielectric Paste
event.shapeless(
  Item.of('powah:dielectric_paste', 20),
  [
    '3x #minecraft:coals',
    'the_vault:vault_diamond',
    '3x #forge:clay'
  ]
);
})