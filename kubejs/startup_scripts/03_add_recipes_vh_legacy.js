onEvent('recipes', event => {

  // Machine Frame
  event.shaped(
    Item.of('rftoolsbase:machine_frame'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'the_vault:gem_gorginite',
      C: 'the_vault:gem_sparkletine',
      D: 'minecraft:diamond_block'
    }
  )

  // Thermal Machine Frame
  event.shaped(
    Item.of('thermal:machine_frame'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'minecraft:diamond',
      B: '#forge:glass',
      C: '#forge:glass',
      D: 'the_vault:gem_black_opal'
    }
  )

  // Machine Casing
  event.shaped(
    Item.of('refinedstorage:machine_casing'),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'refinedstorage:quartz_enriched_iron',
      B: 'the_vault:gem_alexandrite'
    }
  )

  // Builder
  event.shaped(
    Item.of('rftoolsbuilder:builder'),
    [
      'ABC',
      'DED',
      'FGH'
    ],
    {
      A: 'the_vault:gem_sparkletine',
      B: 'minecraft:ender_pearl',
      C: 'the_vault:gem_gorginite',
      D: 'minecraft:redstone',
      E: 'rftoolsbase:machine_frame',
      F: 'the_vault:gem_gorginite',
      G: 'minecraft:redstone',
      H: 'the_vault:gem_sparkletine'
    }
  )

  // AE2 Controller
  event.shaped(
    Item.of('appliedenergistics2:controller'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'the_vault:gem_painite',
      B: 'appliedenergistics2:purified_fluix_crystal',
      C: 'appliedenergistics2:purified_fluix_crystal',
      D: 'appliedenergistics2:engineering_processor'
    }
  )

  // AE2 Drive
  event.shaped(
    Item.of('appliedenergistics2:drive'),
    [
      'ABA',
      'C C',
      'ABA'
    ],
    {
      A: 'the_vault:gem_painite',
      B: 'appliedenergistics2:engineering_processor',
      C: 'appliedenergistics2:fluix_glass_cable'
    }
  )

  // Warp Stone
  event.shaped(
    Item.of('waystones:warp_stone'),
    [
      'ABA',
      'CEC',
      'ABA'
    ],
    {
      A: 'the_vault:gem_benitoite',
      B: 'minecraft:ender_pearl',
      C: 'minecraft:ender_pearl',
      E: 'minecraft:emerald'
    }
  )

  // Machine Frame Pity
  event.shaped(
    Item.of('industrialforegoing:machine_frame_pity'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: '#minecraft:logs',
      B: 'the_vault:gem_wutodie',
      C: 'the_vault:gem_wutodie',
      D: 'minecraft:redstone_block'
    }
  )

  // Trader
  event.shaped(
    Item.of('easy_villagers:trader'),
    [
      'AAA',
      'ABA',
      'CCC'
    ],
    {
      A: '#forge:glass_panes',
      B: 'the_vault:gem_winterite',
      C: 'minecraft:iron_ingot'
    }
  )

  // Iron Farm
  event.shaped(
    Item.of('easy_villagers:iron_farm'),
    [
      'AAA',
      'ABA',
      'CDC'
    ],
    {
      A: '#forge:glass_panes',
      B: 'the_vault:gem_winterite',
      C: 'minecraft:iron_ingot',
      D: 'the_vault:gem_pog'
    }
  )

  // Steel Casing
  event.shaped(
    Item.of('mekanism:steel_casing'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: '#forge:ingots/steel',
      B: '#forge:glass',
      C: 'the_vault:gem_renium',
      D: 'the_vault:gem_winterite'
    }
  )

  // Jetpack
  event.shaped(
    Item.of('mekanism:jetpack'),
    [
      'ABA',
      'CDC',
      'EFE'
    ],
    {
      A: '#forge:storage_blocks/steel',
      B: 'mekanism:basic_control_circuit',
      C: 'the_vault:gem_renium',
      D: 'mekanism:basic_chemical_tank',
      E: 'the_vault:gem_renium',
      F: 'the_vault:gem_pog'
    }
  )

  // Building Gadget
  event.shaped(
    Item.of('buildinggadgets:gadget_building'),
    [
      'ABA',
      'CDC',
      'EFE'
    ],
    {
      A: 'the_vault:gem_sparkletine',
      B: 'minecraft:redstone',
      C: 'minecraft:diamond',
      D: 'minecraft:redstone',
      E: 'minecraft:lapis_lazuli',
      F: 'the_vault:gem_sparkletine'
    }
  )

  // Exchanging Gadget
  event.shaped(
    Item.of('buildinggadgets:gadget_exchanging'),
    [
      'ABA',
      'CDC',
      'EFE'
    ],
    {
      A: 'the_vault:gem_sparkletine',
      B: 'minecraft:redstone',
      C: 'minecraft:diamond',
      D: 'buildinggadgets:gadget_building',
      E: 'minecraft:lapis_lazuli',
      F: 'the_vault:gem_sparkletine'
    }
  )

  // Destruction Gadget
  event.shaped(
    Item.of('buildinggadgets:gadget_destruction'),
    [
      'ABA',
      'CDC',
      'EFE'
    ],
    {
      A: 'the_vault:gem_sparkletine',
      B: 'minecraft:redstone',
      C: 'the_vault:gem_black_opal',
      D: 'the_vault:gem_pog',
      E: 'buildinggadgets:gadget_exchanging',
      F: 'the_vault:gem_black_opal'
    }
  )

  // Digital Miner
  event.shaped(
    Item.of('mekanism:digital_miner'),
    [
      'ABA',
      'CDC',
      'EFE'
    ],
    {
      A: 'mekanism:alloy_atomic',
      B: 'the_vault:gem_pog',
      C: 'mekanism:alloy_atomic',
      D: 'the_vault:gem_winterite',
      E: 'mekanism:robit',
      F: 'mekanism:teleportation_core'
    }
  )

  // RF Crafter
  event.shaped(
    Item.of('rftoolsutility:crafter1'),
    [
      ' A ',
      'BCB',
      ' A '
    ],
    {
      A: 'the_vault:gem_pog',
      B: '#forge:workbench',
      C: 'rftoolsbase:machine_frame'
    }
  )

  // Mek Solar Panel
  event.shaped(
    Item.of('mekanismgenerators:solar_panel'),
    [
      'AAA',
      'BCB',
      'DDD'
    ],
    {
      A: '#forge:glass_panes',
      B: 'the_vault:gem_painite',
      C: 'the_vault:gem_wutodie',
      D: '#forge:ingots/osmium'
    }
  )

  // Mining Gadget
  event.shaped(
    Item.of('mininggadgets:mininggadget'),
    [
      'ABB',
      'CDC',
      'ABB'
    ],
    {
      A: 'minecraft:netherite_ingot',
      B: 'minecraft:iron_ingot',
      C: 'mininggadgets:upgrade_empty',
      D: 'the_vault:gem_black_opal'
    }
  )

  // MG Blank Upgrade
  event.shaped(
    Item.of('mininggadgets:upgrade_empty'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'minecraft:redstone',
      B: 'the_vault:gem_wutodie',
      C: 'minecraft:diamond',
      D: 'the_vault:gem_sparkletine'
    }
  )

  // MG Upgrade 3x3
  event.shaped(
    Item.of('mininggadgets:upgrade_three_by_three'),
    [
      'ABA',
      'CDC',
      'EFE'
    ],
    {
      A: 'minecraft:redstone_block',
      B: 'minecraft:diamond_block',
      C: 'minecraft:ender_pearl',
      D: 'mininggadgets:upgrade_empty',
      E: 'minecraft:ender_pearl',
      F: 'minecraft:netherite_pickaxe'
    }
  )

  // RS Crafter
  event.shaped(
    Item.of('refinedstorage:crafter'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'refinedstorage:quartz_enriched_iron',
      B: 'the_vault:gem_pog',
      C: 'refinedstorage:advanced_processor',
      D: 'refinedstorage:machine_casing'
    }
  )

  // AE2 Assembler
  event.shaped(
    Item.of('appliedenergistics2:molecular_assembler'),
    [
      'ABA',
      'CED',
      'ABA'
    ],
    {
      A: 'the_vault:gem_painite',
      B: 'the_vault:gem_pog',
      C: 'appliedenergistics2:annihilation_core',
      D: 'appliedenergistics2:formation_core',
      E: '#forge:workbench'
    }
  )

  // Mek Assembler
  event.shaped(
    Item.of('mekanism:formulaic_assemblicator'),
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: '#forge:ingots/steel',
      B: '#forge:workbench',
      C: 'the_vault:gem_pog',
      D: 'mekanism:steel_casing',
      E: 'the_vault:gem_pog'
    }
  )

  // Garden Cloche
  event.shaped(
    Item.of('immersiveengineering:cloche'),
    [
      'ABA',
      'CDC',
      'EFE'
    ],
    {
      A: '#forge:glass',
      B: 'immersiveengineering:electron_tube',
      C: 'the_vault:gem_pog',
      D: '#forge:glass',
      E: 'immersiveengineering:component_iron',
      F: '#forge:treated_wood'
    }
  )

  // Spawner Key
  event.shaped(
    Item.of('spawnermod:spawner_key'),
    [
      ' A ',
      ' A ',
      ' B '
    ],
    {
      A: 'the_vault:gem_pog',
      B: 'minecraft:spawner'
    }
  )

  // Advanced Coil
  event.shaped(
    Item.of('ironjetpacks:advanced_coil'),
    [
      'BAB',
      'CDC',
      'BAB'
    ],
    {
      A: 'the_vault:gem_larimar',
      B: 'minecraft:redstone',
      C: 'the_vault:gem_pog',
      D: 'the_vault:gem_larimar'
    }
  )

  // Basic Coil
  event.shaped(
    Item.of('ironjetpacks:basic_coil'),
    [
      'BAB',
      'CDC',
      'BAB'
    ],
    {
      A: 'the_vault:gem_benitoite',
      B: 'minecraft:redstone',
      C: '#forge:rods/wooden',
      D: 'the_vault:gem_benitoite'
    }
  )

   // Black Sand
  event.shaped(
    Item.of('byg:black_sand', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:sand',
      B: '#forge:dyes/black'
    }
  )

  // White Sand
  event.shaped(
    Item.of('byg:white_sand', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:sand',
      B: '#forge:dyes/white'
    }
  )

  // Blue Sand
  event.shaped(
    Item.of('byg:blue_sand', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:sand',
      B: '#forge:dyes/blue'
    }
  )

  // Purple Sand
  event.shaped(
    Item.of('byg:purple_sand', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:sand',
      B: '#forge:dyes/purple'
    }
  )

  // Pink Sand
  event.shaped(
    Item.of('byg:pink_sand', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:sand',
      B: '#forge:dyes/pink'
    }
  )

  // Advanced Vending Machine
  event.shaped(
    Item.of('the_vault:advanced_vending_machine'),
    [
      'ABA',
      'ACA',
      'ADA'
    ],
    {
      A: 'minecraft:gold_ingot',
      B: 'minecraft:redstone',
      C: 'minecraft:glass_pane',
      D: 'minecraft:diamond'
    }
  )

  // Player Damage Trap
  event.shaped(
    Item.of('darkutils:rune_damage_player'),
    [
      ' A ',
      'ABA',
      'CDC'
    ],
    {
      A: 'minecraft:phantom_membrane',
      B: 'the_vault:gem_pog',
      C: 'darkutils:blank_plate',
      D: 'minecraft:diamond_sword'
    }
  )

  // Diamond Paxel
  event.shaped(
    Item.of('pickletweaks:diamond_paxel'),
    [
      'ABC',
      ' D ',
      ' D '
    ],
    {
      A: 'minecraft:diamond_axe',
      B: 'minecraft:diamond_pickaxe',
      C: 'minecraft:diamond_shovel',
      D: 'the_vault:gem_gorginite'
    }
  )

  // Emerald Paxel
  event.shaped(
    Item.of('pickletweaks:emerald_paxel'),
    [
      'ABC',
      ' D ',
      ' D '
    ],
    {
      A: 'pickletweaks:emerald_axe',
      B: 'pickletweaks:emerald_pickaxe',
      C: 'pickletweaks:emerald_shovel',
      D: 'the_vault:gem_gorginite'
    }
  )

  // Netherite Paxel
  event.shaped(
    Item.of('pickletweaks:netherite_paxel'),
    [
      'ABC',
      ' D ',
      ' D '
    ],
    {
      A: 'minecraft:netherite_axe',
      B: 'minecraft:netherite_pickaxe',
      C: 'minecraft:netherite_shovel',
      D: 'the_vault:gem_gorginite'
    }
  )

  // Emerald Armor: Helmet
  event.shaped(
    Item.of('pickletweaks:emerald_helmet'),
    [
      'AAA',
      'ABA',
      '   '
    ],
    {
      A: 'minecraft:emerald',
      B: 'the_vault:gem_renium'
    }
  )

  // Emerald Armor: Chestplate
  event.shaped(
    Item.of('pickletweaks:emerald_chestplate'),
    [
      'ABA',
      'AAA',
      'AAA'
    ],
    {
      A: 'minecraft:emerald',
      B: 'the_vault:gem_renium'
    }
  )

  // Emerald Armor: Leggings
  event.shaped(
    Item.of('pickletweaks:emerald_leggings'),
    [
      'AAA',
      'A A',
      'ABA'
    ],
    {
      A: 'minecraft:emerald',
      B: 'the_vault:gem_renium'
    }
  )

  // Emerald Armor: Boots
  event.shaped(
    Item.of('pickletweaks:emerald_boots'),
    [
      '   ',
      'A A',
      'ABA'
    ],
    {
      A: 'minecraft:emerald',
      B: 'the_vault:gem_renium'
    }
  )
  
  // Danks
event.shaped(
  Item.of('dankstorage:dank_1'),
  [
    'ABA',
    'BCB',
    'ABA'
  ],
  {
    A: 'minecraft:coal',
    B: 'the_vault:gem_black_opal',
    C: 'minecraft:chest'
  }
)

event.shaped(
  Item.of('dankstorage:dank_2'),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: 'minecraft:redstone_block',
    B: 'dankstorage:dank_1',
    C: 'the_vault:gem_pog'
  }
)

event.shaped(
  Item.of('dankstorage:dank_3'),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: 'minecraft:gold_block',
    B: 'dankstorage:dank_2',
    C: 'the_vault:gem_pog'
  }
)

event.shaped(
  Item.of('dankstorage:dank_4'),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: 'minecraft:emerald_block',
    B: 'dankstorage:dank_3',
    C: 'the_vault:gem_pog'
  }
)

event.shaped(
  Item.of('dankstorage:dank_5'),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: 'minecraft:diamond_block',
    B: 'dankstorage:dank_4',
    C: 'the_vault:gem_pog'
  }
)

event.shaped(
  Item.of('dankstorage:dank_6'),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: 'minecraft:obsidian',
    B: 'dankstorage:dank_5',
    C: 'the_vault:gem_pog'
  }
)

event.shaped(
  Item.of('dankstorage:dank_7'),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: 'minecraft:nether_star',
    B: 'dankstorage:dank_6',
    C: 'the_vault:gem_pog'
  }
)

// Backpacks
event.shaped(
  Item.of('simplybackpacks:commonbackpack'),
  [
    'ABA',
    'CDC',
    'EFE'
  ],
  {
    A: 'minecraft:string',
    B: 'the_vault:gem_alexandrite',
    C: 'minecraft:leather',
    D: 'minecraft:leather',
    E: '#forge:chests/wooden',
    F: '#forge:dyes/white'
  }
)

event.shaped(
  Item.of('simplybackpacks:uncommonbackpack'),
  [
    'ABA',
    'CDC',
    'EFE'
  ],
  {
    A: 'minecraft:gold_ingot',
    B: 'the_vault:gem_pog',
    C: 'simplybackpacks:commonbackpack',
    D: 'minecraft:gold_block',
    E: '#forge:chests/wooden',
    F: '#forge:dyes/yellow'
  }
)

event.shaped(
  Item.of('simplybackpacks:rarebackpack'),
  [
    'ABA',
    'CDC',
    'EFE'
  ],
  {
    A: 'minecraft:diamond',
    B: 'the_vault:gem_pog',
    C: 'simplybackpacks:uncommonbackpack',
    D: 'minecraft:diamond_block',
    E: '#forge:chests/wooden',
    F: '#forge:dyes/blue'
  }
)

event.shaped(
  Item.of('simplybackpacks:epicbackpack'),
  [
    'ABA',
    'CDC',
    'EFE'
  ],
  {
    A: 'minecraft:iron_bars',
    B: 'the_vault:gem_pog',
    C: 'simplybackpacks:rarebackpack',
    D: 'minecraft:nether_star',
    E: '#forge:chests/wooden',
    F: '#forge:dyes/magenta'
  }
)

// Charms
event.shaped(
  Item.of('darkutils:charm_experience'),
  [
    'ABA',
    'CDC',
    'ABA'
  ],
  {
    A: 'the_vault:gem_alexandrite',
    B: 'minecraft:emerald',
    C: 'the_vault:gem_pog',
    D: 'minecraft:emerald'
  }
)

event.shaped(
  Item.of('darkutils:charm_gluttony'),
  [
    'ABA',
    'CDC',
    'ABA'
  ],
  {
    A: 'the_vault:gem_pog',
    B: 'the_vault:gem_larimar',
    C: 'pickletweaks:emerald_apple',
    D: 'the_vault:gem_larimar'
  }
)

// Ender Hopper
event.shaped(
  Item.of('darkutils:ender_hopper'),
  [
    'ABA',
    'CDC',
    'EFE'
  ],
  {
    A: 'the_vault:gem_pog',
    B: 'minecraft:ender_eye',
    C: 'minecraft:hopper',
    D: 'minecraft:obsidian',
    E: 'the_vault:gem_wutodie',
    F: 'minecraft:obsidian'
  }
)

// Terrasteel Armor

// Helmet
event.shaped(
  Item.of('botania:terrasteel_helmet'),
  [
    'ABA',
    'CDC',
    'EFE'
  ],
  {
    A: 'botania:livingwood_twig',
    B: 'botania:rune_spring',
    C: 'botania:terrasteel_ingot',
    D: 'botania:manasteel_helmet',
    E: 'the_vault:gem_gorginite',
    F: 'botania:terrasteel_ingot'
  }
)

// Chestplate
event.shaped(
  Item.of('botania:terrasteel_chestplate'),
  [
    'ABA',
    'CDC',
    'EFE'
  ],
  {
    A: 'botania:livingwood_twig',
    B: 'botania:rune_summer',
    C: 'botania:terrasteel_ingot',
    D: 'botania:manasteel_chestplate',
    E: 'the_vault:gem_alexandrite',
    F: 'botania:terrasteel_ingot'
  }
)

// Leggings
event.shaped(
  Item.of('botania:terrasteel_leggings'),
  [
    'ABA',
    'CDC',
    'EFE'
  ],
  {
    A: 'botania:livingwood_twig',
    B: 'botania:rune_autumn',
    C: 'botania:terrasteel_ingot',
    D: 'botania:manasteel_leggings',
    E: 'the_vault:gem_larimar',
    F: 'botania:terrasteel_ingot'
  }
)

// Boots
event.shaped(
  Item.of('botania:terrasteel_boots'),
  [
    'ABA',
    'CDC',
    'EFE'
  ],
  {
    A: 'botania:livingwood_twig',
    B: 'botania:rune_winter',
    C: 'botania:terrasteel_ingot',
    D: 'botania:manasteel_boots',
    E: 'the_vault:gem_wutodie',
    F: 'botania:terrasteel_ingot'
  }
)

// Gaia Ingot
event.shaped(
  Item.of('botania:gaia_ingot'),
  [
    'ABA',
    'CDC',
    'EFE'
  ],
  {
    A: 'the_vault:gem_pog',
    B: 'the_vault:cluster_painite',
    C: 'botania:life_essence',
    D: 'botania:terrasteel_ingot',
    E: 'the_vault:gem_pog',
    F: 'botania:life_essence'
  }
)

// Vector Fast
event.shaped(
  Item.of('darkutils:vector_plate_fast', 6),
  [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'darkutils:vector_plate',
    B: 'the_vault:gem_benitoite',
    C: 'the_vault:gem_pog'
  }
)

// Vector Extreme
event.shaped(
  Item.of('darkutils:vector_plate_extreme', 6),
  [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'darkutils:vector_plate_fast',
    B: 'the_vault:gem_benitoite',
    C: 'the_vault:gem_pog'
  }
)

// Crushing Wheel
event.shaped(
  Item.of('create:crushing_wheel'),
  [
    'ABA',
    'CDC',
    'ABA'
  ],
  {
    A: 'create:andesite_alloy',
    B: '#minecraft:logs',
    C: 'the_vault:gem_wutodie',
    D: 'create:andesite_alloy'
  }
)

// Furnace Engine
event.shaped(
  Item.of('create:furnace_engine'),
  [
    'ABA',
    'CDC',
    'ABA'
  ],
  {
    A: 'create:brass_sheet',
    B: 'the_vault:gem_wutodie',
    C: 'create:brass_casing',
    D: 'minecraft:piston'
  }
)

// Flywheel
event.shaped(
  Item.of('create:flywheel'),
  [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'create:brass_ingot',
    B: 'the_vault:gem_wutodie',
    C: 'create:brass_casing'
  }
)

// Iron Horse Armor
event.shaped(
  Item.of('minecraft:iron_horse_armor'),
  [
    '  A',
    'BBB',
    'C C'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:iron_ingot',
    C: 'the_vault:cluster_painite'
  }
)

// Gold Horse Armor
event.shaped(
  Item.of('minecraft:golden_horse_armor'),
  [
    '  A',
    'BBB',
    'C C'
  ],
  {
    A: 'minecraft:gold_ingot',
    B: 'minecraft:gold_ingot',
    C: 'the_vault:cluster_sparkletine'
  }
)

// Extendo Grip
event.shaped(
  Item.of('create:extendo_grip'),
  [
    'ABC',
    'DED',
    'FGF'
  ],
  {
    A: 'the_vault:chunk_sparkletine',
    B: 'the_vault:gem_pog',
    C: 'the_vault:chunk_renium',
    D: '#forge:storage_blocks/brass',
    E: 'create:brass_hand',
    F: 'the_vault:void_core',
    G: 'the_vault:chunk_painite'
  }
)

// Blank Module x3
event.shaped(
  Item.of('modularrouters:blank_module', 3),
  [
    'ABA',
    'CCC',
    'DDD'
  ],
  {
    A: 'minecraft:redstone',
    B: 'the_vault:gem_alexandrite',
    C: 'minecraft:paper',
    D: 'minecraft:gold_ingot'
  }
)

// Blank Upgrade x2
event.shaped(
  Item.of('modularrouters:blank_upgrade', 2),
  [
    'ABC',
    'DEF',
    'GHI'
  ],
  {
    A: 'minecraft:paper',
    B: 'minecraft:paper',
    C: 'minecraft:gold_ingot',
    D: 'minecraft:paper',
    E: 'minecraft:lapis_lazuli',
    F: 'minecraft:gold_ingot',
    G: 'the_vault:gem_painite',
    H: 'minecraft:paper',
    I: 'minecraft:gold_ingot'
  }
)

// Flux Block
event.shaped(
  Item.of('fluxnetworks:flux_block'),
  [
    'ABA',
    'CDC',
    'ABA'
  ],
  {
    A: 'fluxnetworks:flux_dust',
    B: 'fluxnetworks:flux_core',
    C: 'fluxnetworks:flux_core',
    D: 'the_vault:vault_diamond'
  }
)

// Star Core
event.shaped(
  Item.of('the_vault:star_core'),
  [
    ' A ',
    'ABA',
    ' A '
  ],
  {
    A: 'the_vault:gem_larimar',
    B: 'the_vault:vault_diamond_block'
  }
)

})
