"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { StudentService} from './comp/student/student.service';
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Welcome to Angular";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n    <header class=\"container\">\n        <div class=\"navbar navbar-inverse navbar-fixed-top\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"btn btn-success navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\">DemoApp</a>\n            </div>\n            <div class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"nav\"><a [routerLink]=\"['/welcome']\" >Home</a></li>\n                    <li class=\"nav\"><a [routerLink]=\"['/students']\">Student List</a></li>\n                    <li class=\"nav\"><a [routerLink]=\"['/studentEdit/0']\">Add Student</a></li>\n                </ul>\n            </div>\n        </div>\n    </header>\n    <div class=\"container body-content\">\n        <router-outlet></router-outlet>\n    </div>\n    " //,<pm-products></pm-products>
        // providers: [StudentService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map