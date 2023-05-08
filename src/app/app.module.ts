import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './component/board/board.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FilterPipe } from './component/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
