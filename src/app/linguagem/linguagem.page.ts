import { Component, OnInit } from '@angular/core';
import { LinguagemService } from '../services/linguagem.service';

@Component({
  selector: 'app-linguagem',
  templateUrl: './linguagem.page.html',
  styleUrls: ['./linguagem.page.scss'],
})
export class LinguagemPage implements OnInit {

  public linguagem: any;

  constructor(private linguagemService: LinguagemService) { }

  ngOnInit() {
    this.linguagem = this.linguagemService.get();
  }

}
