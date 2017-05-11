import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { StarComponent } from '../../app/shared/star.component';

@NgModule({
    declarations: [ StarComponent],
    imports: [CommonModule],
    exports: [CommonModule, FormsModule, StarComponent]
})


export class SharedModule {

}

