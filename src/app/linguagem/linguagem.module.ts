import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinguagemPageRoutingModule } from './linguagem-routing.module';

import { LinguagemPage } from './linguagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinguagemPageRoutingModule
  ],
  declarations: [LinguagemPage]
})
export class LinguagemPageModule {}
