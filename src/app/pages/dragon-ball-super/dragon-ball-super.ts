import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { AddCharacter } from "../../components/add-character/add-character";
import { CharactersList } from "../../components/characters-list/characters-list";


@Component({
  selector: 'app-dragon-ball-super',
  imports: [AddCharacter, CharactersList],
  templateUrl: './dragon-ball-super.html',
  styleUrl: './dragon-ball-super.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallSuper {



  characters = signal<Character[]>([

    {
      id: 1,
      name: 'Goku',
      power: 5000
    },
    {
      id: 2,
      name: 'Vegetta',
      power: 4000
    },
    {
      id: 3,
      name: 'Piccolo',
      power: 6000
    },
    {
      id: 4,
      name: 'Cell',
      power: 7000
    }


  ])





}
