import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'characters-list',
  imports: [NgClass],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersList {


  characters = input.required<Character[]>()
  titleList = input<string>('Mi título bonito');

}
