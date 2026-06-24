import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-character',
  imports: [],
  templateUrl: './add-character.html',
  styleUrl: './add-character.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacter {

  name = signal('');
  power = signal(0);

  emitNewCharacter = output<Character>();



  addCharacter() {

    if ( !this.name() || !this.power() || this.power() <= 0 ) {
      console.log('Faltan datos');
      return;
    }

    const newCharacter: Character= {

      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    console.log( newCharacter );

    this.emitNewCharacter.emit(newCharacter);


    this.resetFields();


  }


    resetFields() {
    this.name.set('');
    this.power.set(0);
  }



}
