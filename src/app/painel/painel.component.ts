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
  constructor() { 
    console.log(this.questoes)
  }

  ngOnInit() {
    

  }

 public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value  
    console.log(this.resposta)
  }

}
