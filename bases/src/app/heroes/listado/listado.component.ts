import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] =["spiderman","ironman","batman"]
  borrado:string = ""
  
  constructor() { 

  }

  ngOnInit(): void {
    //inicializar cosas, ejemp: peticion a un servicio
  }
  borrar(){
    this.borrado =this.heroes.shift() || ""
  }

}
