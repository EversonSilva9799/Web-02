import { LoginComponent } from './login/login.component';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardaGuard } from './guarda.guard';


const routes: Routes = [
  // { path: '', component: AlunosComponent },
  { path: '/', redirectTo: 'alunos', pathMatch: 'full', canActivate: [GuardaGuard]},
  { path: 'alunos', component: AlunosComponent, canActivate: [GuardaGuard] },
  { path: 'professores', component: ProfessoresComponent, canActivate: [GuardaGuard] },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'alunos', pathMatch:  'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
