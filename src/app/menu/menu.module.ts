import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food/food.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path:'',
  component: MenuComponent,
},



 ];
@NgModule({
  declarations: [
    FoodComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenuModule { }
