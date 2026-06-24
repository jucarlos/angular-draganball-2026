import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { AddCharacter } from "../../components/add-character/add-character";
import { CharactersList } from "../../components/characters-list/characters-list";
import { DragonballService } from '../../services/dragonball-service';



@Component({
  selector: 'app-dragon-ball-super',
  imports: [AddCharacter, CharactersList],
  templateUrl: './dragon-ball-super.html',
  styleUrl: './dragon-ball-super.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallSuper {

  // inyectar el servicio.

  // clasica inyeccion de d.
  // constructor(public dragonService: DragonballService) {}

  // Se recomienda así:
  dragonService = inject( DragonballService );


  // recibir los datos y mandarlos al servicio
  dataChild() {
    console.log('Vienen datos')
  }







}
