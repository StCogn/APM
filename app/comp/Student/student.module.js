"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
var student_list_component_1 = require("./student-list.component");
var student_filter_pipe_1 = require("./student-filter.pipe");
var student_details_component_1 = require("./student-details.component");
var student_guard_service_1 = require("./student-guard.service");
var student_service_1 = require("./student.service");
var student_routing_module_1 = require("./student-routing.module");
var student_edit_component_1 = require("./student-edit.component");
var shared_module_1 = require("../../../app/shared/shared.module");
var StudentModule = (function () {
    function StudentModule() {
    }
    return StudentModule;
}());
StudentModule = __decorate([
    core_1.NgModule({
        declarations: [
            student_list_component_1.StudentListComponent,
            student_filter_pipe_1.StudentFilterPipe,
            student_details_component_1.StudentDetailComponent,
            student_edit_component_1.StudentEditComponent
        ],
        imports: [student_routing_module_1.StudentRoutingModule, shared_module_1.SharedModule, forms_1.ReactiveFormsModule
            // ,RouterModule.forChild([
            //     {path : 'students', component: StudentListComponent},
            //     { path: 'student/:id',component: StudentDetailComponent },
            //     { path: 'studentEdit/:id', component: StudentEditComponent }
            // ])
        ],
        providers: [student_guard_service_1.StudentDetailGuard, student_service_1.StudentService]
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=student.module.js.map