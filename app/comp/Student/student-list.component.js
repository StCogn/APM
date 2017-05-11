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
var student_service_1 = require("./student.service");
var StudentListComponent = (function () {
    function StudentListComponent(_studentService) {
        this._studentService = _studentService;
        this.pageTitle = 'Student List';
        this.avatarWidth = 30;
        this.showImage = false;
    }
    StudentListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    //called on when component is initialized
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log('In OnInit');
        //this.students = this._studentService.getStudents();
        this._studentService.getStudents()
            .subscribe(function (students) { return _this.students = students; }, function (error) { return _this.errorMessage = error; });
    };
    //event receiving from child component
    StudentListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Student List:' + message;
    };
    return StudentListComponent;
}());
StudentListComponent = __decorate([
    core_1.Component({
        //selector: 'pm-products',
        moduleId: module.id,
        templateUrl: 'student-list.component.html',
        styleUrls: ['student-list.component.css'] //,
        //providers: [StudentService]
        //templateUrl: 'app/comp/student/student-list.component.html',
        //styleUrls: ['app/comp/student/student-list.component.css']
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentListComponent);
exports.StudentListComponent = StudentListComponent;
//# sourceMappingURL=student-list.component.js.map