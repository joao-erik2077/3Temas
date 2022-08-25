import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public linguagens: any[] = [
    {
      nome: 'Javascript',
      img: 'https://logospng.org/download/javascript/logo-javascript-256.png'
    },
    {
      nome: 'Typescript',
      img: 'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png'
    },
    {
      nome: 'Java',
      img: 'https://cdn-icons-png.flaticon.com/512/226/226777.png'
    },
    {
      nome: 'Python',
      img: 'https://miro.medium.com/max/672/1*ztqS5rRI29GHxZa6uPF2UA.png'
    },
    {
      nome: 'C++',
      img: 'https://logospng.org/download/c-plus-plus/c-plus-plus-256.png'
    },
  ];

  constructor() {}

}
