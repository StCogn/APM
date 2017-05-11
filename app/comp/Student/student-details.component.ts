import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import {IStudent} from './student';
import { StudentService } from './student.service';

@Component({
    moduleId: module.id,
    templateUrl: 'student-details.component.html'
})

export class StudentDetailComponent implements OnInit, OnDestroy
{
    pageTitle: string = 'Student Details';
    student: IStudent;
    errorMesssage: string;
    private sub: Subscription;

    constructor(private _route : ActivatedRoute, 
                private _router : Router, 
                private _service: StudentService){

    }

    ngOnInit():void {
        this.sub = this._route.params.subscribe(
                params => {
                    let id = +params['id'];
                    this.getStudent(id);
                });
        
        //let id = +this._route.snapshot.params['id'];
        //this.pageTitle += `: ${id}`;
    }

    getStudent(id:number){
        this._service.getStudent(id).subscribe(
            student => this.student = student,
            error => this.errorMesssage = <any>error,
        );

        
    }

    ngOnDestroy(): void{
        this.sub.unsubscribe();
    }

    onBack() : void {
        this._router.navigate(['/students']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Student Detail: ' + message;
    }
}