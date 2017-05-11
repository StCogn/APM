"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
var Observable_1 = require("rxjs/Observable");
var student_service_1 = require("./student.service");
var number_validator_1 = require("../../shared/number.validator");
var generic_validator_1 = require("../../shared/generic-validator");
var StudentEditComponent = (function () {
    function StudentEditComponent(fb, route, router, studentService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.studentService = studentService;
        this.pageTitle = '';
        // Use with the generic validation message class
        this.displayMessage = {};
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
        this.genericValidator = new generic_validator_1.GenericValidator(this.validationMessages);
    }
    Object.defineProperty(StudentEditComponent.prototype, "tags", {
        get: function () {
            return this.studentForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    StudentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentForm = this.fb.group({
            studentName: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(50)]],
            sex: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(1)]],
            age: ['', [forms_1.Validators.required, number_validator_1.NumberValidators.range(21, 40)]],
            fee: ['', [forms_1.Validators.required, number_validator_1.NumberValidators.range(100, 2000)]],
            enDate: { value: '', disabled: true },
            starRating: ['', number_validator_1.NumberValidators.range(1, 5)],
            imageUrl: { value: '', disabled: true }
        });
        // Read the product Id from the route parameter
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getStudent(id);
        });
    };
    StudentEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    StudentEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return Observable_1.Observable.fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        Observable_1.Observable.merge.apply(Observable_1.Observable, [this.studentForm.valueChanges].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.studentForm);
        });
    };
    // addTag(): void {
    //     this.tags.push(new FormControl());
    // }
    StudentEditComponent.prototype.getStudent = function (id) {
        var _this = this;
        this.studentService.getStudent(id)
            .subscribe(function (student) { return _this.onStudentRetrieved(student); }, function (error) { return _this.errorMessage = error; });
    };
    StudentEditComponent.prototype.onStudentRetrieved = function (student) {
        if (this.studentForm) {
            this.studentForm.reset();
        }
        this.student = student;
        //alert(this.student.studentId.toString() );
        if (this.student == null) {
            this.pageTitle = 'Add Student';
        }
        else {
            this.pageTitle = "Edit Student: " + this.student.studentName;
        }
        // Update the data on the form
        if (this.student != null) {
            this.studentForm.patchValue({
                studentName: this.student.studentName,
                sex: this.student.sex,
                age: this.student.age,
                fee: this.student.fee,
                enDate: this.student.enrolmentDate,
                starRating: this.student.starRating,
                imageUrl: this.student.imageURL
            });
        }
        else {
            this.studentForm.patchValue({
                enDate: '1 Jan 2017',
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/7c/7b/e3/7c7be328bf3d0406f51e47fb656f9975.jpg'
            });
        }
        //this.studentForm.updateValueAndValidity();
        //this.studentForm.setControl('tags', this.fb.array(this.product.tags || []));
    };
    StudentEditComponent.prototype.deleteProduct = function () {
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
    };
    StudentEditComponent.prototype.saveStudent = function () {
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
    };
    return StudentEditComponent;
}());
__decorate([
    core_1.ViewChildren(forms_1.FormControlName, { read: core_1.ElementRef }),
    __metadata("design:type", Array)
], StudentEditComponent.prototype, "formInputElements", void 0);
StudentEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'student-edit.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router,
        student_service_1.StudentService])
], StudentEditComponent);
exports.StudentEditComponent = StudentEditComponent;
//# sourceMappingURL=student-edit.component.js.map