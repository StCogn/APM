import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IStudent } from './student';
import { StudentService } from './student.service';

import { NumberValidators } from '../../shared/number.validator';
import { GenericValidator } from '../../shared/generic-validator';

@Component({
    moduleId: module.id,
    templateUrl: 'student-edit.component.html'
})
export class StudentEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    pageTitle: string = '';
    errorMessage: string;
    studentForm: FormGroup;

    student: IStudent;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    get tags(): FormArray {
        return <FormArray>this.studentForm.get('tags');
    }

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private studentService: StudentService) {

        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            studentName: {
                required: 'Student name is required.',
                minlength: 'Student name must be at least three characters.',
                maxlength: 'Student name cannot exceed 50 characters.'
            },
            sex: {
                required: 'Gender code is required.',
            },
            age: {
                required: 'Age is required.',
                range: 'Age should be between 21-40'
            },
            fee: {
                required: 'Annual Fee is required.',
                range: 'Fee should be between 100 - 2000 '

            },
            enDate: {
                required: 'Enrollement Date is required.'
            },
            starRating: {
                range: 'Rate the stduent between 1 (lowest) and 5 (highest).'
            }
         };

        // Define an instance of the validator for use with this form, 
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.studentForm = this.fb.group({
            studentName: ['', [Validators.required,
                               Validators.minLength(5),
                               Validators.maxLength(50)]],
            sex: ['',[ Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
            age: ['',[ Validators.required, NumberValidators.range(21, 40)]],
            fee: ['', [ Validators.required, NumberValidators.range(100, 2000)]],
            enDate:{value:'', disabled:true},
            starRating: ['',NumberValidators.range(1,5)],
            imageUrl: {value:'', disabled:true}
        });

        // Read the product Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getStudent(id);
            }
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

        // Merge the blur event observable with the valueChanges observable
        Observable.merge(this.studentForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.studentForm);
        });
    }

    // addTag(): void {
    //     this.tags.push(new FormControl());
    // }

    getStudent(id: number): void {
        this.studentService.getStudent(id)
            .subscribe(
                (student: IStudent) => this.onStudentRetrieved(student),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onStudentRetrieved(student: IStudent): void {
        if (this.studentForm) {
            this.studentForm.reset();
        }
        this.student = student;
        //alert(this.student.studentId.toString() );
        if (this.student==null) {
            this.pageTitle = 'Add Student';
        } else {
            this.pageTitle = `Edit Student: ${this.student.studentName}`;
        }

        // Update the data on the form
        if(this.student != null){
            this.studentForm.patchValue({
                studentName: this.student.studentName,
                sex: this.student.sex,
                age: this.student.age,
                fee: this.student.fee,
                enDate: this.student.enrolmentDate,
                starRating: this.student.starRating,
                imageUrl: this.student.imageURL
            });
        }else{
            this.studentForm.patchValue({
                enDate: '1 Jan 2017',
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/7c/7b/e3/7c7be328bf3d0406f51e47fb656f9975.jpg'
            });
        }
        //this.studentForm.updateValueAndValidity();
        //this.studentForm.setControl('tags', this.fb.array(this.product.tags || []));
    }

    deleteProduct(): void {
    //     if (this.product.id === 0) {
    //         // Don't delete, it was never saved.
    //         this.onSaveComplete();
    //    } else {
    //         if (confirm(`Really delete the product: ${this.product.productName}?`)) {
    //             this.productService.deleteProduct(this.product.id)
    //                 .subscribe(
    //                     () => this.onSaveComplete(),
    //                     (error: any) => this.errorMessage = <any>error
    //                 );
    //         }
    //     }
    }

    saveStudent(): void {
        // if (this.productForm.dirty && this.productForm.valid) {
        //     // Copy the form values over the product object values
        //     let p = Object.assign({}, this.product, this.productForm.value);

        //     this.productService.saveProduct(p)
        //         .subscribe(
        //             () => this.onSaveComplete(),
        //             (error: any) => this.errorMessage = <any>error
        //         );
        // } else if (!this.productForm.dirty) {
        //     this.onSaveComplete();
        // }
    }

    // onSaveComplete(): void {
    //     // Reset the form to clear the flags
    //     this.productForm.reset();
    //     this.router.navigate(['/products']);
    // }
}
