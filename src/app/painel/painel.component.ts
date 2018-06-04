import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  @Output() public encerrarGame: EventEmitter<string> = new EventEmitter()

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
      if(this.rodada === 10){
        this.encerrarGame.emit('vitoria')        
      }
      this.atualizaRodada()
      this.resposta= ''
    }else{
      this.tentativas--
      if(this.tentativas === -1){
        this.encerrarGame.emit('derrota')
      }
    }

 }
}
