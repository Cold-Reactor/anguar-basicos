import { Component } from "@angular/core";

@Component({
    selector:"app-heroe",
    templateUrl:"heroe.component.html"
})
export class HeroeComponent{
    nombre: string ="ironman"
    edad:string="45"
    funcion:string="vengador"
    kill:string="dead"

    cambiarNombre():void{
        this.nombre = "spiderman"
    }
    cambiarEdad():void{
        this.edad = "22"
    }
}