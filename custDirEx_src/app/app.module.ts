import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyDirective } from "./my.directive";
import { FormsModule } from "@angular/forms";
import { StructuralDirective } from "./structural.directive";
@NgModule({
  declarations: [
    AppComponent,
    MyDirective,
    StructuralDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
