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

  public progresso: number = 0

  constructor() { 
    this.rodadaQuestao = this.questoes[this.rodada]
    console.log(this.rodadaQuestao)
  }

  ngOnInit() {
    

  }

 public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value  
  }

 public verificarResposta(): void {
    if(this.rodadaQuestao.resposta == this.resposta){
      this.rodada++
      this.progresso = this.progresso + (100 / this.questoes.length)
      this.rodadaQuestao = this.questoes[this.rodada]
      console.log(this.progresso)
      alert('resposta correta')
    }else{
      alert('resposta errada !')
    }

 }
}
