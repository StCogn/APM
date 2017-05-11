import {Injectable } from '@angular/core';
import {IStudent} from './student';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

//this is optional untill you have property to inject
@Injectable()
export class StudentService{

    private _studentUrl = 'api/students/students.json';
    constructor(private _http : Http){

    }

    getStudents(): Observable< IStudent[]>{
        return this._http.get(this._studentUrl)
            .map((response : Response) => <IStudent[]> response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);

    }

    getStudent(id: number): Observable<IStudent>{
        return this.getStudents()
        .map((student : IStudent[]) => student.find(s => s.studentId === id))
        .catch(this.handleError);
    }
    private handleError (error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}