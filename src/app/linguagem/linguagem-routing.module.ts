import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinguagemPage } from './linguagem.page';

const routes: Routes = [
  {
    path: '',
    component: LinguagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinguagemPageRoutingModule {}
