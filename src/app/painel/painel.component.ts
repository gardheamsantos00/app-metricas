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

  public resposta: string = ''
  public rodada: number = 0 
  public rodadaQuestao: Questoes

  public progresso: number = 0

  public tentativas: number = 4

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
    

  }

 public atualizaRodada(): void{
  this.rodadaQuestao = this.questoes[this.rodada]
 } 

 public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value  
  }

 public verificarResposta(): void {
    if(this.rodadaQuestao.resposta == this.resposta){
      this.rodada++
      this.progresso = this.progresso + (100 / this.questoes.length)
      this.atualizaRodada()
      this.resposta= ''
      alert('resposta correta')
    }else{
      this.tentativas--
      if(this.tentativas === -1){
        alert('Você gastou todas as tentativas')
      }
      alert('resposta errada !')
    }

 }
}
