import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild(IonModal) modal: IonModal;

  public linguagens: any[] = [
    {
      nome: 'Javascript',
      img: 'https://logospng.org/download/javascript/logo-javascript-256.png',
      books: [
        {
          nome: 'Eloquente Javascript',
          link: 'https://github.com/braziljs/eloquente-javascript',
        },
        {
          nome: 'Javascript do jeito certo',
          link: 'http://jstherightway.org/pt-br/',
        },
        {
          nome: 'Quando usar um STACK Javascript',
          link: 'http://stack.desenvolvedor.expert/comecando/quando-usar.html#quando-usar-um-devstack-javascript',
        },
      ],
    },
    {
      nome: 'Typescript',
      img: 'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png',
      books: [
        {
          nome: 'Typescript o guia definitivo',
          link: 'https://oieduardorabelo.medium.com/typescript-o-guia-definitivo-1a63b04259cc',
        },
        {
          nome: 'Começando Typescript',
          link: 'https://www.maiconsilva.com/starting-typescript/',
        },
      ],
    },
    {
      nome: 'Java',
      img: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
      books: [
        {
          nome: 'Java básico',
          link: 'http://professor.unisinos.br/pjaques/material/java_basico.pdf',
        },
        {
          nome: 'Apostila Java Web',
          link: 'https://www.alura.com.br/apostila-java-web/',
        },
        {
          nome: 'Apostila Java POO',
          link: 'https://www.alura.com.br/apostila-java-orientacao-objetos/',
        },
      ],
    },
    {
      nome: 'Python',
      img: 'https://miro.medium.com/max/672/1*ztqS5rRI29GHxZa6uPF2UA.png',
      books: [
        {
          nome: 'Aprendendo computação com Python',
          link: 'https://aprendendo-computacao-com-python.readthedocs.io/en/latest/index.html',
        },
        {
          nome: 'Pense em Python',
          link: 'https://penseallen.github.io/PensePython2e/',
        },
        {
          nome: 'Python orientado a objetos',
          link: 'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxyYWZhZWx1ZnR8Z3g6NTJlM2UzYzY1ZTgzMDEwMw',
        },
      ],
    },
    {
      nome: 'C++',
      img: 'https://logospng.org/download/c-plus-plus/c-plus-plus-256.png',
      books: [
        {
          nome: 'Linguagem C++',
          link: 'https://www.ime.usp.br/~slago/slago-C++.pdf',
        },
      ],
    },
  ];
  public linguagemModal: any = {
    nome: 'Typescript',
    img: 'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png',
    books: [
      {
        nome: 'Typescript o guia definitivo',
        link: 'https://oieduardorabelo.medium.com/typescript-o-guia-definitivo-1a63b04259cc',
      },
      {
        nome: 'Começando Typescript',
        link: 'https://www.maiconsilva.com/starting-typescript/',
      },
    ],
  };

  constructor() {}

  present() {
    this.modal.present();
  }

  linguagemModalChange(linguagem: any) {
    this.linguagemModal = linguagem;
    this.present();
  }
}
