import { CharacterClass, CharacterRace } from '../enums/character-sheet-enums';
import {
  AbilityScoreModifiers,
  AbilityScores,
  Skills,
} from '../models/character-sheet-models/ability-scores.model';
import { CharacterSheet } from '../models/character-sheet-models/character-sheet.model';

export class CharacterSheetRepository {
  async getCharacterSheetById(id: string): Promise<CharacterSheet> {
    return CharacterSheet.parse({
      characterName: 'Test Character',
      playerName: 'Test Player',
      characterClass: CharacterClass.Barbarian,
      alignment: 'Chaotic Good',
      background: 'Outlander',
      race: CharacterRace.Dragonborn,
      abilityScores: AbilityScores.parse({}),
      abilityScoreModifiers: AbilityScoreModifiers.parse({}),
      skills: Skills.parse({}),
      partyMembers: [
        {
          id: '1',
          characterName: 'Test Character 1',
          playerName: 'Test Player 1',
          characterClass: CharacterClass.Barbarian,
          characterLevel: 1,
          characterRace: CharacterRace.Dragonborn,
        },
      ],
    });
  }
}
