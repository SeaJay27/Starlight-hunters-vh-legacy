// Starlight Hunters - Vault Hunters Recipe Removals
onEvent('recipes', event => {

  const items = [
    'the_vault:void_core',
    'the_vault:cluster_netherite',
    'the_vault:spark',
    'the_vault:blank_key',
    'the_vault:key_press'
  ];

  // Loop through each item and remove its crafting recipe
  items.forEach(id => event.remove({ output: id }));

});
