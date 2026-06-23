import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

  // OnPush es que se no se usa zonejs
  // Default.

})
export class Counter {



  counter: number = 10;

  counterSignal = signal<number>(50);


  constructor() {

    // setInterval(() => {

    //   console.log('Contador');
    //   this.counter += 1;

    // }, 2000);

  }



  incrementar(value: number ){

    this.counter += value;

    // depende del data anterior
    this.counterSignal.update( ( data ) => {

      /// lógica

      return data += value;
    } );


  }


  reset() {
    this.counter = 10;

    // No depende del dato anterior
    this.counterSignal.set(50);

  }



}
