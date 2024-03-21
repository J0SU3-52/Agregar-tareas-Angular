import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { NavbarJEVLComponent } from './components/navbar-jevl/navbar-jevl.component';
import { TareasJEVLComponent } from './components/tareas-jevl/tareas-jevl.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarJEVLComponent,
    TareasJEVLComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
