import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/shared/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})

export class App {


  public titulo: string = 'El titulo de mi app'

  protected readonly title = signal('dragon-ball !!!!');


}
