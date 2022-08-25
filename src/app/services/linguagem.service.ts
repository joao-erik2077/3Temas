import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinguagemService {

  private linguagem: any;

  constructor() { }

  get() {
    return this.linguagem;
  }

  save(linguagem: any) {
    this.linguagem = linguagem;
  }
}
