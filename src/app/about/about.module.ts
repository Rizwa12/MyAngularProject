import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AbouhomeComponent } from './abouhome/abouhome.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',
  component: AbouhomeComponent,
},



 ];


@NgModule({
  declarations: [
    AboutComponent,
    AbouhomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }

