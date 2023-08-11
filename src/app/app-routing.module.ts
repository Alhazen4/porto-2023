import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, title: 'Ardi Azizi | FrontEnd & UI UX'},
  {path: 'work', component: WorkComponent, title: 'Ardi Azizi | Work'},
  {path: 'about', component: AboutComponent, title: 'Ardi Azizi | About'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
