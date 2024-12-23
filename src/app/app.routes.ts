
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { ProjectComponent } from './project/project.component';
import { SigninComponent } from './auth/signin/signin.component';

export const routes: Routes = [
  {
    path: 'home', component: BaseComponent,
    children: [
      { path: 'project/:id', component: ProjectComponent },
    ]
  },
  {path: 'auth/signin', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
