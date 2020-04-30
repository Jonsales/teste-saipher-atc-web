import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PlanoVooComponent } from './plano-voo.component';
import { PlanoVooDetalhesComponent } from './plano-voo-detalhes/plano-voo-detalhes.component';

const routes: Routes = [
  {
    path: "",
    component: PlanoVooComponent
  },
  {
    path: "detalhes/:id",
    component: PlanoVooDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PlanoVooRouting {}
