onEvent('recipes', event => {

  // Etching Fragment
  event.blasting(Item.of('the_vault:etching_fragment'), 'the_vault:etching', 2, 250);

  // Vault Ingot Helmet
  event.blasting(Item.of('the_vault:vault_ingot', 3), 'the_vault:helmet', 2, 250);

  // Vault Ingot Chestplate
  event.blasting(Item.of('the_vault:vault_ingot', 4), 'the_vault:chestplate', 2, 250);

  // Vault Ingot Leggings
  event.blasting(Item.of('the_vault:vault_ingot', 3), 'the_vault:leggings', 2, 250);

  // Vault Ingot Boots
  event.blasting(Item.of('the_vault:vault_ingot', 2), 'the_vault:boots', 2, 250);

  // Vault Ingot Sword
  event.blasting(Item.of('the_vault:vault_ingot', 1), 'the_vault:sword', 2, 250);

  // Vault Ingot Dagger
  event.blasting(Item.of('the_vault:vault_ingot', 1), 'the_vault:dagger', 2, 250);

  // Vault Ingot Axe
  event.blasting(Item.of('the_vault:vault_ingot', 2), 'the_vault:axe', 2, 250);

});
