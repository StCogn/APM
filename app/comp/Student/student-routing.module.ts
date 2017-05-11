import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { StudentListComponent} from './student-list.component';
import { StudentDetailComponent } from './student-details.component';
import { StudentDetailGuard} from './student-guard.service';
import { StudentEditComponent } from './student-edit.component';
@NgModule({
    imports: [
        RouterModule.forChild([
        {path : 'students', component : StudentListComponent },
        {path : 'student/:id', canActivate: [StudentDetailGuard] , component : StudentDetailComponent },
        { path: 'studentEdit/:id', component: StudentEditComponent }
    ])
    ],
    exports: [RouterModule]
})

export class StudentRoutingModule{

}