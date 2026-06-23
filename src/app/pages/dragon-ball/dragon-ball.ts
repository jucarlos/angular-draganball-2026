import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-dragon-ball',
  imports: [NgClass],
  templateUrl: './dragon-ball.html',
  styleUrl: './dragon-ball.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBall {


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


    // grabamos en la lista que tenemos





  }





}
