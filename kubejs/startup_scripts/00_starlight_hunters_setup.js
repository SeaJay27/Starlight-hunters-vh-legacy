// This script is the pre-setup script for the Starlight Hunters modpack.

onEvent('tags.items', event => {
  // Artifacts Tag
  event.add('the_vault:artifacts', [
    'the_vault:artifact_1',
    'the_vault:artifact_2',
    'the_vault:artifact_3',
    'the_vault:artifact_4',
    'the_vault:artifact_5',
    'the_vault:artifact_6',
    'the_vault:artifact_7',
    'the_vault:artifact_8',
    'the_vault:artifact_9',
    'the_vault:artifact_10',
    'the_vault:artifact_11',
    'the_vault:artifact_12',
    'the_vault:artifact_13',
    'the_vault:artifact_14',
    'the_vault:artifact_15',
    'the_vault:artifact_16'
  ]);
});

onEvent('tags.items', event => {
  // Vault Loot Statues Tag
  event.add('the_vault:vault_statues', [
    'the_vault:gift_normal_statue',
    'the_vault:gift_mega_statue',
    'the_vault:vault_player_loot_statue',
    'the_vault:arena_player_loot_statue'
  ]);
});

