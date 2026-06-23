import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'add-character',
  imports: [],
  templateUrl: './add-character.html',
  styleUrl: './add-character.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacter {}
