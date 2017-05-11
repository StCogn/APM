import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from '../app/home/welcome.component';


@NgModule({
    imports: [ 
    RouterModule.forRoot([
                {path : 'welcome', component : WelcomeComponent },
                {path : '', redirectTo: 'welcome', pathMatch:'full' },
                {path : '**', redirectTo: 'welcome', pathMatch:'full' }
            ])
        ],

    exports: [RouterModule]
})

export class AppRoutingModule{

}