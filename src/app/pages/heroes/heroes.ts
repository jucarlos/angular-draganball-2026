import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-heroes',
  imports: [],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Heroes {


  name = signal<string>('IronMan');
  age = signal<number>(30);

  capitalizedName = computed<string>( () => {

      return this.name().toUpperCase();

  });


  changeHeroe() {
    this.name.set('Spiderman');
    this.age.set( 25 );
  }

  changeAge() {
    this.age.set( 30 );
    this.name().toUpperCase
  }


  getHeroeDescription() {
    return `${this.name() } tiene ${this.age() }`;
  }


}
