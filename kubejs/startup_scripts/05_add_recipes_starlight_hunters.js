onEvent ('recipes', event => {

  
  // Mystery Vault Stew
event.shaped(
  Item.of('the_vault:vault_stew_mystery'),
  [
    ' A ',
    'BCB',
    ' D '
  ],
  {
    A: 'the_vault:poisonous_mushroom',
    B: 'the_vault:gem_larimar',
    C: 'the_vault:hunter_eye',
    D: 'minecraft:bowl'
  }
);

// Vault Burger
event.shaped(
  Item.of('the_vault:vault_burger'),
  [
    ' A ',
    'BCB',
    ' D '
  ],
  {
    A: 'minecraft:bread',
    B: 'the_vault:gem_larimar',
    C: 'the_vault:oozing_pizza',
    D: 'minecraft:bread'
  }
);

// Legendary Treasure Normal
event.shaped(
  Item.of('the_vault:legendary_treasure_normal'),
  [
    ' A ',
    'BCB',
    ' A '
  ],
  {
    A: 'the_vault:cluster_larimar',
    B: 'the_vault:cluster_alexandrite',
    C: 'the_vault:vault_crystal_normal'
  }
);

// Legendary Treasure Rare
event.shaped(
  Item.of('the_vault:legendary_treasure_rare'),
  [
    ' A ',
    'BCB',
    ' A '
  ],
  {
    A: 'the_vault:cluster_larimar',
    B: 'the_vault:cluster_alexandrite',
    C: 'the_vault:vault_crystal_rare'
  }
);

// Legendary Treasure Epic
event.shaped(
  Item.of('the_vault:legendary_treasure_epic'),
  [
    ' A ',
    'BCB',
    ' A '
  ],
  {
    A: 'the_vault:cluster_larimar',
    B: 'the_vault:cluster_alexandrite',
    C: 'the_vault:vault_crystal_epic'
  }
);

// Legendary Treasure Omega
event.shaped(
  Item.of('the_vault:legendary_treasure_omega'),
  [
    ' A ',
    'BCB',
    ' A '
  ],
  {
    A: 'the_vault:cluster_larimar',
    B: 'the_vault:cluster_alexandrite',
    C: 'the_vault:vault_crystal_omega'
  }
);

// 0_Artifact
event.shaped(
  Item.of('the_vault:unidentified_artifact'),
  [
    'ABC',
    'DED',
    'CBA'
  ],
  {
    A: 'the_vault:vault_crystal_omega',
    B: 'the_vault:void_core',
    C: 'the_vault:vault_crystal_epic',
    D: 'the_vault:gem_pog',
    E: 'the_vault:spark'
  }
);

// Spark
event.shaped(
  Item.of('the_vault:spark'),
  [
    'ABC',
    'DED',
    'CBA'
  ],
  {
    A: 'the_vault:knowledge_star',
    B: 'the_vault:void_core',
    C: 'the_vault:skill_orb',
    D: 'the_vault:vault_crystal_epic',
    E: 'the_vault:omega_pog'
  }
);

// Loot Statue MVP crown
event.shaped(
  Item.of('the_vault:player_statue'),
  [ 
    ' A ',
    'CBC',
    'DED'
  ],
  {
    A: 'the_vault:mvp_crown',
    B: 'the_vault:trader_core',
    C: 'the_vault:vault_scrap',
    D: 'the_vault:infused_eternal_soul',
    E: 'engineersdecor:factory_hopper'
  }
);

// Loot Statue Normal
event.shaped(
  Item.of('the_vault:gift_normal_statue'),
  [
    'ABA',
    'DED',
    'FGF'
  ],
  {
    A: 'the_vault:gem_pog',
    B: 'the_vault:vault_scrap',
    D: 'the_vault:eternal_soul',
    E: 'the_vault:trader_core',
    F: 'the_vault:vault_platinum',
    G: 'minecraft:hopper'
  }
);

// Loot Statue Raffle
event.shaped(
  Item.of('the_vault:vault_player_loot_statue'),
  [
    'ABA',
    'DED',
    'FGF'
  ],
  {
    A: 'the_vault:gem_pog',
    B: 'the_vault:vault_scrap',
    D: 'the_vault:eternal_soul',
    E: 'the_vault:trader_core_raffle',
    F: 'the_vault:vault_platinum',
    G: 'minecraft:hopper'
  }
);

// Loot Statue Omega
event.shaped(
  Item.of('the_vault:gift_mega_statue'),
  [
    'ABA',
    'DED',
    'FGF'
  ],
  {
    A: 'the_vault:gem_pog',
    B: 'the_vault:vault_scrap',
    D: 'the_vault:eternal_soul',
    E: 'the_vault:trader_core_omega',
    F: 'the_vault:vault_platinum',
    G: 'minecraft:hopper'
  }
);

// Orange
event.shaped(
  Item.of('the_vault:sour_orange'),
  [
    ' A ',
    'BCD',
    ' A '
  ],
  {
    A: 'the_vault:bitter_lemon',
    B: 'the_vault:cluster_benitoite',
    C: 'the_vault:cluster_wutodie',
    D: 'the_vault:cluster_larimar'
  }
);

// Pear
event.shaped(
  Item.of('the_vault:mystic_pear'),
  [
    'ABA',
    'CBC',
    'ABA'
  ],
  {
    A: 'the_vault:sour_orange',
    B: 'the_vault:gem_pog',
    C: 'the_vault:void_core'
  }
);

// Relic Statue
event.shaped(
  Item.of('the_vault:relic_statue'),
  [
    'ABA',
    ' C ',
    'ABA'
  ],
  {
    A: 'minecraft:stone_brick_stairs',
    B: 'minecraft:stone_brick_slab',
    C: 'the_vault:cluster_benitoite'
  }
);

// Arena Crate
event.shaped(
  Item.of('the_vault:vault_crate_arena'),
  [
    'ABA',
    'BCB',
    'ABA'
  ],
  {
    A: 'the_vault:gem_larimar',
    B: '#minecraft:logs',
    C: 'minecraft:shulker_box'
  }
);

// Vial of Sand - Skill
event.shaped(
  Item.of('the_vault:vial_of_sand', 4),
  [
    ' A ',
    ' B ',
    ' C '
  ],
  {
    A: 'the_vault:skill_essence',
    B: 'compressium:sand_1',
    C: 'minecraft:glass_bottle'
  }
);

// Vial of Sand - Knowledge
event.shaped(
  Item.of('the_vault:vial_of_sand', 4),
  [
    ' A ',
    ' B ',
    ' C '
  ],
  {
    A: 'the_vault:star_essence',
    B: 'compressium:sand_1',
    C: 'minecraft:glass_bottle'
  }
);

// Key Mould
event.shaped(
  Item.of('the_vault:key_mould'),
  [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'the_vault:vial_of_sand',
    B: 'the_vault:cluster_netherite'
  }
);

// Blank Key
event.shaped(
  Item.of('the_vault:blank_key'),
  [
    ' A ',
    'ABA',
    ' A '
  ],
  {
    A: 'the_vault:key_piece',
    B: 'the_vault:key_mould'
  }
);

// Key Anvil
event.shaped(
  Item.of('the_vault:key_press'),
  [
    'AAA',
    ' B ',
    'BBB'
  ],
  {
    A: 'the_vault:vault_ingot',
    B: 'minecraft:netherite_ingot'
  }
);

// Void Core
event.shaped(
  Item.of('the_vault:void_core'),
  [
    'ABA',
    'DED',
    'ABA'
  ],
  {
    A: 'the_vault:cluster_black_opal',
    B: 'the_vault:gem_pog',
    D: 'the_vault:vault_crystal_rare',
    E: 'the_vault:infused_eternal_soul'
  }
);

// Skill Orb Frame
event.shaped(
  Item.of('the_vault:orb_frame'),
  [
    ' A ',
    'ABA',
    ' A '
  ],
  {
    A: 'the_vault:gem_black_opal',
    B: 'the_vault:vault_diamond_block'
  }
);

// Raffle Trader
event.shaped(
  Item.of('the_vault:trader_core_raffle'),
  [
    ' A ',
    'BCB',
    ' A '
  ],
  {
    A: 'the_vault:trader_core',
    B: 'the_vault:gem_pog',
    C: 'the_vault:void_core'
  }
);

// Omega Trader
event.shaped(
  Item.of('the_vault:trader_core_omega'),
  [
    'ABC',
    'BDB',
    'EBF'
  ],
  {
    A: 'the_vault:cluster_sparkletine',
    B: 'the_vault:trader_core_raffle',
    C: 'the_vault:cluster_renium',
    D: 'the_vault:void_core',
    E: 'the_vault:cluster_alexandrite',
    F: 'the_vault:cluster_wutodie'
  }
);

// Gift Bomb Normal
event.shaped(
  Item.of('the_vault:gift_bomb_normal'),
  [
    'ABA',
    'CDC',
    'CEC'
  ],
  {
    A: 'the_vault:legendary_treasure_normal',
    B: 'the_vault:gem_pog',
    C: 'minecraft:red_wool',
    D: 'the_vault:trader_core',
    E: 'engineersdecor:factory_hopper'
  }
);

// Super Gift Bomb
event.shaped(
  Item.of('the_vault:gift_bomb_super'),
  [
    'ABA',
    'CDC',
    'CEC'
  ],
  {
    A: 'the_vault:legendary_treasure_rare',
    B: 'the_vault:gift_bomb_normal',
    C: 'minecraft:purple_wool',
    D: 'the_vault:trader_core',
    E: 'engineersdecor:factory_hopper',
  }
);

// Mega Gift Bomb
event.shaped(
  Item.of('the_vault:gift_bomb_mega'),
  [
    'ABA',
    'CDC',
    'CEC'
  ],
  {
    A: 'the_vault:legendary_treasure_epic',
    B: 'the_vault:gift_bomb_super',
    C: 'minecraft:cyan_wool',
    D: 'the_vault:trader_core_raffle',
    E: 'engineersdecor:factory_hopper',
  }
);

// Omega Gift Bomb
event.shaped(
  Item.of('the_vault:gift_bomb_omega'),
  [
    'ABA',
    'CDC',
    'CEC'
  ],
  {
    A: 'the_vault:legendary_treasure_omega',
    B: 'the_vault:gift_bomb_mega',
    C: 'minecraft:white_wool',
    D: 'the_vault:trader_core_omega',
    E: 'engineersdecor:factory_hopper',
  }
);

// Global Trader
event.shaped(
  Item.of('the_vault:global_trader'),
  [
    'ABA',
    'CDC',
    'ABA'
  ],
  {
    A: 'the_vault:vault_crystal_epic',
    B: 'the_vault:vending_machine',
    C: 'the_vault:advanced_vending_machine',
    D: 'the_vault:vending_machine'
  }
);

// Obelisk Inscription
event.shaped(
  Item.of('the_vault:obelisk_inscription'),
  [
    'ABC',
    'DEF',
    'GHI'
  ],
  {
    A: 'the_vault:vault_crystal_normal',
    B: 'the_vault:skill_shard',
    C: 'the_vault:vault_crystal_rare',
    D: 'the_vault:star_shard',
    E: 'the_vault:void_core',
    F: 'the_vault:star_shard',
    G: 'the_vault:vault_crystal_epic',
    H: 'the_vault:skill_shard',
    I: 'the_vault:vault_crystal_omega'
  }
);

// Netherite Cluster
event.shaped(
  Item.of('the_vault:cluster_netherite'),
  [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'minecraft:netherite_ingot',
    B: 'minecraft:wither_skeleton_skull'
  }
);

});