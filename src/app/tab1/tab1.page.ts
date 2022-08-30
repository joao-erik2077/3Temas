import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinguagemService } from '../services/linguagem.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public linguagens: any[] = [
    {
      nome: 'Javascript',
      img: 'https://logospng.org/download/javascript/logo-javascript-256.png',
      books: [
        'https://github.com/braziljs/eloquente-javascript',
        'http://jstherightway.org/pt-br/',
        'http://stack.desenvolvedor.expert/comecando/quando-usar.html#quando-usar-um-devstack-javascript',
      ],
    },
    {
      nome: 'Typescript',
      img: 'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png',
      books: [
        'https://oieduardorabelo.medium.com/typescript-o-guia-definitivo-1a63b04259cc',
        'https://www.maiconsilva.com/starting-typescript/',
      ],
    },
    {
      nome: 'Java',
      img: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
      books: [
        'http://professor.unisinos.br/pjaques/material/java_basico.pdf',
        'https://www.alura.com.br/apostila-java-web/',
        'https://www.alura.com.br/apostila-java-orientacao-objetos/',
      ],
    },
    {
      nome: 'Python',
      img: 'https://miro.medium.com/max/672/1*ztqS5rRI29GHxZa6uPF2UA.png',
      books: [
        'https://aprendendo-computacao-com-python.readthedocs.io/en/latest/index.html',
        'https://penseallen.github.io/PensePython2e/',
        'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxyYWZhZWx1ZnR8Z3g6NTJlM2UzYzY1ZTgzMDEwMw',
      ],
    },
    {
      nome: 'C++',
      img: 'https://logospng.org/download/c-plus-plus/c-plus-plus-256.png',
      books: [
        'https://www.ime.usp.br/~slago/slago-C++.pdf',
        'http://calhau.dca.fee.unicamp.br/wiki/images/0/01/EstruturasDados.pdf'
      ],
    },
  ];

  constructor(
    private router: Router,
    private linguagemService: LinguagemService
  ) {}

  linguagemRoute(linguagem: any) {
    this.linguagemService.save(linguagem);
    this.router.navigateByUrl('/linguagem');
  }
}
