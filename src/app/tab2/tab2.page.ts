import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public readonly cant = '#ff4b2b';
  public readonly can = '#25b4ec';
  public readonly take = '#e9ff27';
  public readonly all = '#4eff2b';

  public circleColors = [
    this.cant, // AB+
    this.cant, // A+
    this.cant, // B+
    this.cant, // O+
    this.cant, // AB-
    this.cant, // A-
    this.cant, // B-
    this.cant, // O-
  ];

  constructor() {}

  changeBloodType(event) {
    switch (event) {
      case 'AB+':
        this.circleColors = [
          this.all, // AB+
          this.take, // A+
          this.take, // B+
          this.take, // O+
          this.take, // AB-
          this.take, // A-
          this.take, // B-
          this.take, // O-
        ];
        break;
      case 'AB-':
        this.circleColors = [
          this.can, // AB+
          this.cant, // A+
          this.cant, // B+
          this.cant, // O+
          this.all, // AB-
          this.take, // A-
          this.take, // B-
          this.take, // O-
        ];
        break;
      case 'A+':
        this.circleColors = [
          this.can, // AB+
          this.all, // A+
          this.cant, // B+
          this.take, // O+
          this.cant, // AB-
          this.take, // A-
          this.cant, // B-
          this.take, // O-
        ];
        break;
      case 'A-':
        this.circleColors = [
          this.can, // AB+
          this.can, // A+
          this.cant, // B+
          this.cant, // O+
          this.can, // AB-
          this.all, // A-
          this.cant, // B-
          this.take, // O-
        ];
        break;
      case 'B+':
        this.circleColors = [
          this.can, // AB+
          this.cant, // A+
          this.all, // B+
          this.take, // O+
          this.cant, // AB-
          this.cant, // A-
          this.take, // B-
          this.take, // O-
        ];
        break;
      case 'B-':
        this.circleColors = [
          this.can, // AB+
          this.cant, // A+
          this.can, // B+
          this.cant, // O+
          this.can, // AB-
          this.cant, // A-
          this.all, // B-
          this.take, // O-
        ];
        break;
      case 'O+':
        this.circleColors = [
          this.can, // AB+
          this.can, // A+
          this.can, // B+
          this.all, // O+
          this.cant, // AB-
          this.cant, // A-
          this.cant, // B-
          this.take, // O-
        ];
        break;
      case 'O-':
        this.circleColors = [
          this.can, // AB+
          this.can, // A+
          this.can, // B+
          this.can, // O+
          this.can, // AB-
          this.can, // A-
          this.can, // B-
          this.all, // O-
        ];
        break;
    }
  }
}
