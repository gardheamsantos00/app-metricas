import { Component, OnInit } from '@angular/core';

import { Questoes } from '../shared/questoes.model'
import { QUESTOES } from './questoes-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public questoes: Questoes[] = QUESTOES
  public instrucao: string = "Responda a questao com Certo ou Errado: "

  public resposta: string
  public rodada: number = 0 
  public rodadaQuestao: Questoes


  constructor() { 
    this.rodadaQuestao = this.questoes[this.rodada]
    console.log(this.rodadaQuestao)
  }

  ngOnInit() {
    

  }

 public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value  
    //console.log(this.resposta)
  }

 public verificarResposta(): void {
    //console.log('verificado: ' + this.resposta)
    this.rodada++
    console.log(this.rodada)
    this.rodadaQuestao = this.questoes[this.rodada]
 }
}
