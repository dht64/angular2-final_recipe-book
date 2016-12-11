import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import { routing } from './app.routing';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ShoppingListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
