import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from '../heroe/heroe.component';
import { ListadoComponent } from './listado.component';

@NgModule({
    declarations:[ // declarar los componentes del modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[// que parte del modulo quiero que se exporte
        ListadoComponent,
        HeroeComponent
    ],
    imports:[// importar un modulo exterior, para poder utilizar sus propiedades
        CommonModule
    ]
})
export class HeroesModule{

}