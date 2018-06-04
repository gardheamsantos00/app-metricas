import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gameEmAndamento: boolean = true
  public tipoEncerramento: string
  
  public encerrarGame(tipo : string): void {
    this.gameEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarGame(): void{
    this.gameEmAndamento = true
    this.tipoEncerramento = undefined
  }
}
