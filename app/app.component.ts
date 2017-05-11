
import {Component} from '@angular/core';
//import { StudentService} from './comp/student/student.service';
@Component({
    selector: 'pm-app',
    template: `
    <header class="container">
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-header">
                <button type="button" class="btn btn-success navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand">DemoApp</a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="nav"><a [routerLink]="['/welcome']" >Home</a></li>
                    <li class="nav"><a [routerLink]="['/students']">Student List</a></li>
                    <li class="nav"><a [routerLink]="['/studentEdit/0']">Add Student</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div class="container body-content">
        <router-outlet></router-outlet>
    </div>
    `//,<pm-products></pm-products>
   // providers: [StudentService]
    
})

export class AppComponent{
    pageTitle : string = "Welcome to Angular";
}