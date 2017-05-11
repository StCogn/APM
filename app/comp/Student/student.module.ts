import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ReactiveFormsModule} from '@angular/forms';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { StudentListComponent} from './student-list.component';
import { StudentFilterPipe} from './student-filter.pipe';
import { StudentDetailComponent } from './student-details.component';
import { StudentDetailGuard} from './student-guard.service';
import { StudentService } from './student.service';
import { StudentRoutingModule } from './student-routing.module';
import {StudentEditComponent} from './student-edit.component';
import { SharedModule } from '../../../app/shared/shared.module';

@NgModule({
declarations: [
        StudentListComponent, 
        StudentFilterPipe, 
        StudentDetailComponent,
        StudentEditComponent
    ],
imports: [ StudentRoutingModule, SharedModule ,ReactiveFormsModule
        // ,RouterModule.forChild([
        //     {path : 'students', component: StudentListComponent},
        //     { path: 'student/:id',component: StudentDetailComponent },
        //     { path: 'studentEdit/:id', component: StudentEditComponent }
        // ])
    ],
providers: [StudentDetailGuard, StudentService]

})


export class StudentModule {

}