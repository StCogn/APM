import {Component, OnInit} from '@angular/core';
import {IStudent} from  './student';
import { StudentService} from './student.service';
@Component({
    //selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'student-list.component.html',
    styleUrls: ['student-list.component.css']//,
    //providers: [StudentService]
    //templateUrl: 'app/comp/student/student-list.component.html',
    //styleUrls: ['app/comp/student/student-list.component.css']
})

export class StudentListComponent implements OnInit {
    

    pageTitle: string = 'Student List';
    avatarWidth: number =30;
    showImage: boolean = false;
    lstFilter: string;
    students: IStudent[];
    errorMessage: string;

    constructor(private _studentService : StudentService){

    }
    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    //called on when component is initialized
    ngOnInit() : void{
        //console.log('In OnInit');
        //this.students = this._studentService.getStudents();
        this._studentService.getStudents()
            .subscribe(students => this.students = students,
                error => this.errorMessage = <any>error);
    }

    //event receiving from child component
    onRatingClicked(message: string): void{
        this.pageTitle = 'Student List:' + message;
    }
}