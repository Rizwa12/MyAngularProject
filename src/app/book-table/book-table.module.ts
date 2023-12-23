import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooktableComponent } from './booktable/booktable.component';
import { BookhomeComponent } from './bookhome/bookhome.component';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
const routes: Routes = [
  {path:'',
  component: BookhomeComponent,
},
]

@NgModule({
  declarations: [
    BooktableComponent,
    BookhomeComponent,
    
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule.forChild(routes)
  ]
})
export class BookTableModule { }
