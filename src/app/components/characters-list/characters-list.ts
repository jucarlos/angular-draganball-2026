import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'characters-list',
  imports: [],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersList {}
