import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NumberComponent } from './number/number.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  // définition des routes pour chacun des composants
  // Rappel: en Angular une page est un composant
  { path: '', redirectTo: 'status', pathMatch: "full" },
  { path: 'form', component: FormulaireComponent },
  { path: 'status', component: StatusComponent },
  { path: 'number/:number', component: NumberComponent },
  { path: 'cats', component: CatsComponent },

  // Il est possible de chaîner les routes
  // { path: 'users', children: [
  //   {path: '', component: UserComponent},
  //   {path: 'new', component: NewUserComponent},
  //   {path: ':id/edit', component: EditUserComponent},
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
