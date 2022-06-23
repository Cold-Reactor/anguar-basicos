import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';


@NgModule({
    declarations:[ // declarar los componentes del modulo
        ContadorComponent
    ],
    exports:[// que parte del modulo quiero que se exporte
        ContadorComponent
    ],
    imports:[// importar un modulo exterior, para poder utilizar sus propiedades

    ]
})
export class ContadorModule{

}