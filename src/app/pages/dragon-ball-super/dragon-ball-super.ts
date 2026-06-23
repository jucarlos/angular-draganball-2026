import { ChangeDetectionStrategy, Component, signal, ɵɵattachSourceLocations } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { NgClass } from '@angular/common';
import { AddCharacter } from "../../components/add-character/add-character";
import { CharactersList } from "../../components/characters-list/characters-list";


@Component({
  selector: 'app-dragon-ball-super',
  imports: [NgClass, AddCharacter, CharactersList],
  templateUrl: './dragon-ball-super.html',
  styleUrl: './dragon-ball-super.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallSuper {


  name = signal<string>('');
  power = signal<number>(0);




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

  addCharacter() {

    if ( !this.name() || !this.power() || this.power() <= 0 ) {
      console.log('Faltan datos');
      return;
    }

    const newCharacter: Character = {

      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update( ( data ) => {

        return [...data, newCharacter];
    });


    console.log( this.characters() );

    this.resetFields();



  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }





}
