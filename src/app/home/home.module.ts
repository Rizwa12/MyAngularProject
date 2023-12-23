import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LeftContentComponent } from './left-content/left-content.component';
import { RightContentComponent } from './right-content/right-content.component';
import { FoodComponent } from './food/food.component';
import { AboutComponent } from './about/about.component';
import { BookatableComponent } from './bookatable/bookatable.component';
import { ClientComponent } from './client/client.component';
import { GoogleMapsModule } from '@angular/google-maps';

const routes: Routes = [
  {path:'',
  component: HomeComponent,
},



 ];

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LeftContentComponent,
    RightContentComponent,
   
    FoodComponent,
        AboutComponent,
        BookatableComponent,
        ClientComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule,

  ]
})
export class HomeModule { }
