import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gamaEmAndamento: boolean = true

  public encerrarGame(tipo : string): void {
    console.log(tipo)
    this.gamaEmAndamento = false
  }
}
