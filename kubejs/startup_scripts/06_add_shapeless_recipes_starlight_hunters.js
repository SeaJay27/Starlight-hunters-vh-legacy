onEvent ('recipes', event => {
    // Vault Rocks
event.shapeless(
  Item.of('the_vault:vault_rock'),
  ['the_vault:vault_crystal_normal']
);

event.shapeless(
  Item.of('the_vault:vault_rock', 2),
  ['the_vault:vault_crystal_rare']
);

event.shapeless(
  Item.of('the_vault:vault_rock', 4),
  ['the_vault:vault_crystal_epic']
);

event.shapeless(
  Item.of('the_vault:vault_rock', 8),
  ['the_vault:vault_crystal_omega']
);

// Bitter Lemons
event.shapeless(
  Item.of('the_vault:bitter_lemon'),
  [
    'the_vault:relic_dragon_breath',
    'the_vault:relic_dragon_head',
    'the_vault:relic_dragon_chest',
    'the_vault:relic_dragon_foot',
    'the_vault:relic_dragon_tail',
    'the_vault:relic_statue'
  ]
);

event.shapeless(
  Item.of('the_vault:bitter_lemon'),
  [
    'the_vault:relic_miners_delight',
    'the_vault:relic_miners_light',
    'the_vault:relic_pickaxe_handle',
    'the_vault:relic_pickaxe_head',
    'the_vault:relic_pickaxe_tool',
    'the_vault:relic_statue'
  ]
);

event.shapeless(
  Item.of('the_vault:bitter_lemon'),
  [
    'the_vault:relic_sword_blade',
    'the_vault:relic_sword_handle',
    'the_vault:relic_sword_stick',
    'the_vault:relic_warriors_armour',
    'the_vault:relic_warriors_charm',
    'the_vault:relic_statue'
  ]
);

event.shapeless(
  Item.of('the_vault:bitter_lemon'),
  [
    'the_vault:relic_diamond_essence',
    'the_vault:relic_gold_essence',
    'the_vault:relic_mystic_gem_essence',
    'the_vault:relic_netherite_essence',
    'the_vault:relic_platinum_essence',
    'the_vault:relic_statue'
  ]
);

event.shapeless(
  Item.of('the_vault:bitter_lemon'),
  [
    'the_vault:relic_cupcake_blue',
    'the_vault:relic_cupcake_lime',
    'the_vault:relic_cupcake_pink',
    'the_vault:relic_cupcake_purple',
    'the_vault:relic_cupcake_red',
    'the_vault:relic_statue'
  ]
);

event.shapeless(
  Item.of('the_vault:bitter_lemon'),
  [
    'the_vault:relic_air',
    'the_vault:relic_spirit',
    'the_vault:relic_fire',
    'the_vault:relic_earth',
    'the_vault:relic_water',
    'the_vault:relic_statue'
  ]
);

event.shapeless(
  Item.of('the_vault:bitter_lemon'),
  [
    'the_vault:relic_twitch_emote1',
    'the_vault:relic_twitch_emote2',
    'the_vault:relic_twitch_emote3',
    'the_vault:relic_twitch_emote4',
    'the_vault:relic_twitch_emote5',
    'the_vault:relic_statue'
  ]
);

event.shapeless(
  Item.of('the_vault:bitter_lemon'),
  [
    'the_vault:relic_twolf999_head',
    'the_vault:relic_twolf999_combat_vest',
    'the_vault:relic_twolf999_combat_leggings',
    'the_vault:relic_twolf999_combat_gloves',
    'the_vault:relic_twolf999_combat_boots',
    'the_vault:relic_statue'
  ]
);

event.shapeless(
  Item.of('the_vault:bitter_lemon'),
  [
    'the_vault:relic_armor_of_forbearance',
    'the_vault:relic_heart_of_the_void',
    'the_vault:relic_nemesis_thwarter',
    'the_vault:relic_reverence_edge',
    'the_vault:relic_wings_of_equity',
    'the_vault:relic_statue'
  ]
);

// Player Statues
event.shapeless(
  Item.of('the_vault:player_statue'),
  ['the_vault:gift_normal_statue']
);

event.shapeless(
  Item.of('the_vault:player_statue'),
  ['the_vault:gift_mega_statue']
);

event.shapeless(
  Item.of('the_vault:player_statue'),
  ['the_vault:vault_player_loot_statue']
);

event.shapeless(
  Item.of('the_vault:player_statue'),
  ['the_vault:arena_player_loot_statue']
);

// Essences
event.shapeless(
  Item.of('the_vault:skill_essence', 9),
  ['the_vault:skill_shard']
);

event.shapeless(
  Item.of('the_vault:star_essence', 9),
  ['the_vault:star_shard']
);

// Crystals
event.shapeless(
  Item.of('the_vault:vault_crystal_rare'),
  [
    'the_vault:vault_crystal_normal','the_vault:vault_crystal_normal','the_vault:vault_crystal_normal',
    'the_vault:vault_crystal_normal','the_vault:vault_crystal_normal','the_vault:vault_crystal_normal',
    'the_vault:vault_crystal_normal','the_vault:vault_crystal_normal','the_vault:vault_crystal_normal'
  ]
);

event.shapeless(
  Item.of('the_vault:vault_crystal_epic'),
  [
    'the_vault:vault_crystal_rare','the_vault:vault_crystal_rare','the_vault:vault_crystal_rare',
    'the_vault:vault_crystal_rare','the_vault:vault_crystal_rare','the_vault:vault_crystal_rare',
    'the_vault:vault_crystal_rare','the_vault:vault_crystal_rare','the_vault:vault_crystal_rare'
  ]
);

event.shapeless(
  Item.of('the_vault:vault_crystal_omega'),
  [
    'the_vault:vault_crystal_epic','the_vault:vault_crystal_epic','the_vault:vault_crystal_epic',
    'the_vault:vault_crystal_epic','the_vault:vault_crystal_epic','the_vault:vault_crystal_epic',
    'the_vault:vault_crystal_epic','the_vault:vault_crystal_epic','the_vault:vault_crystal_epic'
  ]
);

event.shapeless(
  Item.of('the_vault:unidentified_artifact'),
  [
    '#the_vault:artifacts','#the_vault:artifacts','#the_vault:artifacts',
    '#the_vault:artifacts'
  ]
);
})