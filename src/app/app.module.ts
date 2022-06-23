import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//AQUI SE IMPORTAN LOS COMPONENTES
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/listado/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,       //AQUI SE ENLISTA LA CLASE DE LOS COMPONENTES
  ],
  imports: [
    BrowserModule, //AQUI SE EBLISTAN TODOS LOS MODULOS
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent] // aplicaion principal
})
export class AppModule { }
