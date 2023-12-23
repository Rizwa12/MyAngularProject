import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { AboutModule } from './about/about.module';
import { BookTableModule } from './book-table/book-table.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    MenuModule,
    AboutModule,
    BookTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
