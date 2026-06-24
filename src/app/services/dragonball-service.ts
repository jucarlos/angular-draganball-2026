import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// Los servicios son singleton

@Injectable({
  providedIn: 'root',
})
export class DragonballService  {



    characters = signal<Character[]>(this.loadFromLocalStorage());


    loadFromLocalStorage() {
      const characters = localStorage.getItem('characters');

      return characters ? JSON.parse( characters ) : [];
    }



  addCharacter(character: Character ){

    // console.log( character );
    this.characters.update( ( listado ) => [...listado, character]);
    localStorage.setItem('characters', JSON.stringify ( this.characters() ) );

  }




  //  characters = signal<Character[]>([

  //   {
  //     id: 1,
  //     name: 'Goku',
  //     power: 6900
  //   },
  //   {
  //     id: 2,
  //     name: 'Vegetta',
  //     power: 4500
  //   }


  // ]);



  /// tener la data

  // agregar data o borrar data

  // cargar data de un sitio externo. bd, localstorage

  // guardar en sitio externo bd, localstorage



}
