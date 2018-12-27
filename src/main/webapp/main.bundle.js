webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-user-list></app-user-list> -->\n<router-outlet></router-outlet>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_auth_guard_service__ = __webpack_require__("../../../../../src/app/service/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_HttpClient__ = __webpack_require__("../../../../../src/app/service/HttpClient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_data_service_service__ = __webpack_require__("../../../../../src/app/service/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_userservice_service__ = __webpack_require__("../../../../../src/app/service/userservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_register_user_register_component__ = __webpack_require__("../../../../../src/app/user-register/user-register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_login_user_login_component__["a" /* UserLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__user_register_user_register_component__["a" /* UserRegisterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_12__user_login_user_login_component__["a" /* UserLoginComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_auth_guard_service__["a" /* AuthGuardService */]]
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_12__user_login_user_login_component__["a" /* UserLoginComponent */]
                },
                {
                    path: 'register',
                    component: __WEBPACK_IMPORTED_MODULE_13__user_register_user_register_component__["a" /* UserRegisterComponent */]
                },
                {
                    path: 'list',
                    component: __WEBPACK_IMPORTED_MODULE_11__user_list_user_list_component__["a" /* UserListComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_auth_guard_service__["a" /* AuthGuardService */]]
                },
                {
                    path: '**',
                    component: __WEBPACK_IMPORTED_MODULE_11__user_list_user_list_component__["a" /* UserListComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_auth_guard_service__["a" /* AuthGuardService */]]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_userservice_service__["a" /* UserserviceService */], __WEBPACK_IMPORTED_MODULE_3__service_data_service_service__["a" /* DataServiceService */], __WEBPACK_IMPORTED_MODULE_2__service_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_1__service_HttpClient__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__service_auth_guard_service__["a" /* AuthGuardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/service/HttpClient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userservice_service__ = __webpack_require__("../../../../../src/app/service/userservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpClient = (function () {
    function HttpClient(http, userService, _router) {
        this.http = http;
        this.userService = userService;
        this._router = _router;
    }
    HttpClient.prototype.b64Encode = function (str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return window.btoa(str);
    };
    HttpClient.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
        var currentUser;
        this.userService.currentUser.subscribe(function (user) { return currentUser = user; });
        if (currentUser && currentUser.name && currentUser.password) {
            console.log(currentUser);
            headers.append('Authorization', 'Basic ' + this.b64Encode(currentUser.name + ':' + currentUser.password));
        }
        else {
            this._router.navigate(['/login']);
        }
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: headers });
    };
    HttpClient.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, this.options);
    };
    HttpClient.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, this.options);
    };
    return HttpClient;
}());
HttpClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__userservice_service__["a" /* UserserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__userservice_service__["a" /* UserserviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HttpClient);

var _a, _b, _c;
//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ "../../../../../src/app/service/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userservice_service__ = __webpack_require__("../../../../../src/app/service/userservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var currentUser;
        this.userService.currentUser.subscribe(function (user) { return currentUser = user; });
        if (currentUser && currentUser.name && currentUser.password) {
            // logged in so return true
            console.log('User logged in');
            return true;
        }
        console.log('User logged out');
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__userservice_service__["a" /* UserserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__userservice_service__["a" /* UserserviceService */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HttpClient__ = __webpack_require__("../../../../../src/app/service/HttpClient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataServiceService = (function () {
    function DataServiceService(_http) {
        this._http = _http;
        this.url = 'http://localhost:8080/api';
    }
    DataServiceService.prototype.fetchUsers = function () {
        return this._http.get(this.url + '/users')
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    DataServiceService.prototype.addUser = function (user) {
        return this._http.post(this.url + '/register', user)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    DataServiceService.prototype.loginUser = function (user) {
        return this._http.post(this.url + '/login', user)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    DataServiceService.prototype._errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Server Error');
    };
    DataServiceService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    return DataServiceService;
}());
DataServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__HttpClient__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__HttpClient__["a" /* HttpClient */]) === "function" && _a || Object])
], DataServiceService);

var _a;
//# sourceMappingURL=data-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/userservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("../../../../../src/app/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserserviceService = (function () {
    function UserserviceService() {
        this.userSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](__WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* User */]);
        this.currentUser = this.userSource.asObservable();
    }
    UserserviceService.prototype.setUser = function (user) {
        this.userSource.next(user);
    };
    return UserserviceService;
}());
UserserviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserserviceService);

//# sourceMappingURL=userservice.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/list\" routerLinkActive=\"active\">User List</a>\n    <a class=\"navbar-brand\" routerLink=\"/login\" routerLinkActive=\"active\">User Login</a>\n  <div class=\"collapse navbar-collapse\">\n    <span class=\"navbar-text\" *ngIf=\"currentUser\">{{currentUser.name}}</span>\n  </div>\n<nav>\n  \n<div class=\"col-md-12\" *ngIf=\"_router.url === '/' || _router.url == '/list'\">\n  <div *ngIf=\"currentUser\">\n    <h2>Current User Details</h2>\n    <span>Name: {{currentUser.name}}</span><br>\n    <span>Comment: {{currentUser.comment}}</span>\n  </div>\n  <h2>User List</h2>\n  <ul *ngIf=\"errorMsg != 0\">\n    <li *ngFor= \"let user of users\"> \n      <a routerLink=\"/user/{{user.id}}\">\n          {{user.name}}\n      </a> \n    </li>\n  </ul>\n  <div *ngIf=\"errorMsg == 0\">\n    {{errorMsg}}\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_data_service_service__ = __webpack_require__("../../../../../src/app/service/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_userservice_service__ = __webpack_require__("../../../../../src/app/service/userservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_model__ = __webpack_require__("../../../../../src/app/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserListComponent = (function () {
    function UserListComponent(userService, dataService, router) {
        this.router = router;
        this.title = 'List of User name';
        this.user = new __WEBPACK_IMPORTED_MODULE_4__user_model__["a" /* User */]();
        this.userService = userService;
        this.dataService = dataService;
        this._router = router;
    }
    ;
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('LocalStorage:' + localStorage.getItem('currentUser'));
        this.dataService.fetchUsers()
            .subscribe(function (respData) {
            _this.users = respData;
            console.log(_this.users);
        }, function (respError) {
            console.log(respError);
            _this.errorMsg = respError.status;
        });
        this.userService.currentUser.subscribe(function (currentUser) { return _this.currentUser = currentUser; });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_userservice_service__["a" /* UserserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_userservice_service__["a" /* UserserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_data_service_service__["a" /* DataServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_data_service_service__["a" /* DataServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserListComponent);

var _a, _b, _c;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <form (submit)=\"loginForm()\" class=\"col-md-6\">\n    <h4>User Login</h4>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input id=\"name\" name=\"name\" class=\"form-control\"\n            required minlength=\"4\" forbiddenName=\"bob\"\n            [(ngModel)]=\"user.name\" #name=\"ngModel\" \n            type=\"text\" placeholder=\"Enter User Name\">\n      \n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n        class=\"alert alert-danger\">\n      \n        <div *ngIf=\"name.errors.required\">\n        Name is required.\n        </div>\n        <div *ngIf=\"name.errors.minlength\">\n        Name must be at least 4 characters long.\n        </div>\n        <div *ngIf=\"name.errors.forbiddenName\">\n        Name cannot be Bob.\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input id=\"password\" name=\"password\" class=\"form-control\"\n            required minlength=\"4\" forbiddenName=\"bob\"\n            [(ngModel)]=\"user.password\" #password=\"ngModel\" id=\"password\" \n            type=\"password\" placeholder=\"Enter Password\">\n      \n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n        class=\"alert alert-danger\">\n      \n        <div *ngIf=\"password.errors.required\">\n          password is required.\n        </div>\n        <div *ngIf=\"password.errors.minlength\">\n          password must be at least 4 characters long.\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-primary\">Submit</button>\n  </form>\n  <a class=\"navbar-brand\" routerLink=\"/register\" routerLinkActive=\"active\">User Register</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service_service__ = __webpack_require__("../../../../../src/app/service/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_userservice_service__ = __webpack_require__("../../../../../src/app/service/userservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_model__ = __webpack_require__("../../../../../src/app/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserLoginComponent = (function () {
    function UserLoginComponent(userService, dataService, router) {
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* User */]('', '', '');
        this.userService = userService;
        this.dataService = dataService;
        this._router = router;
    }
    ;
    UserLoginComponent.prototype.loginForm = function () {
        var _this = this;
        this.userService.setUser(this.user);
        this.dataService.loginUser(this.user)
            .subscribe(function (respData) {
            //this.user = respData
            console.log(respData);
            _this.userService.setUser(respData);
            localStorage.setItem('currentUser', JSON.stringify(respData));
            _this._router.navigate(['/list']);
        }, function (respError) {
            console.log(respError);
            _this.errorMsg = respError.status;
        });
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-user-login',
        template: __webpack_require__("../../../../../src/app/user-login/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-login/user-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_userservice_service__["a" /* UserserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_userservice_service__["a" /* UserserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_data_service_service__["a" /* DataServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_data_service_service__["a" /* DataServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-register/user-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-register/user-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <!-- <form (submit)=\"sumbitForm(user)\" class=\"col-md-6\">\n    <h4>Add User Form</h4>\n    <div class=\"form-group\">\n      <label for=\"fullName\">Name</label>\n      <input id=\"name\" name=\"name\" class=\"form-control\" required minlength=\"4\" forbiddenName=\"bob\" [(ngModel)]=\"user.name\" #name=\"ngModel\"\n        type=\"text\" placeholder=\"Enter User Name\">\n\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n\n        <div *ngIf=\"name.errors.required\">\n          Name is required.\n        </div>\n        <div *ngIf=\"name.errors.minlength\">\n          Name must be at least 4 characters long.\n        </div>\n        <div *ngIf=\"name.errors.forbiddenName\">\n          Name cannot be Bob.\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input id=\"password\" name=\"password\" class=\"form-control\" required minlength=\"4\" forbiddenName=\"bob\" [(ngModel)]=\"user.password\"\n        #password=\"ngModel\" id=\"password\" type=\"password\" placeholder=\"Enter Password\">\n\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n\n        <div *ngIf=\"password.errors.required\">\n          password is required.\n        </div>\n        <div *ngIf=\"password.errors.minlength\">\n          password must be at least 4 characters long.\n        </div>\n        <div *ngIf=\"password.errors.forbiddenName\">\n          password cannot be Bob.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"comment\">Comment</label>\n      <textarea type=\"text\" [(ngModel)]=\"user.comment\" #comment=\"ngModel\" name=\"comment\" id=\"comment\" col=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n    </div>\n    <button class=\"btn btn-primary\">Submit</button>\n  </form> -->\n  <form [formGroup]=\"userForm\" class=\"col-md-6\">\n    <h4>Add User Form</h4>\n    <div class=\"form-group\">\n      <label for=\"fullName\">Name</label>\n      <input id=\"name\" \n             formControlName=\"name\"  \n             class=\"form-control\" \n             required minlength=\"4\" \n             forbiddenName=\"bob\" \n             type=\"text\" \n             placeholder=\"Enter User Name\"\n             #name><p>Form value: {{ userForm.value | json }} {{ userForm}}</p>\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"name.errors.required\">\n          Name is required.\n        </div>\n        <div *ngIf=\"name.errors.minlength\">\n          Name must be at least 4 characters long.\n        </div>\n        <div *ngIf=\"name.errors.forbiddenName\">\n          Name cannot be Bob.\n        </div> \n      </div>\n    </div>\n    <div class=\"form-group\" >\n      <label for=\"password\">Password</label>\n      <input id=\"password\"\n             formControlName=\"password\"\n             class=\"form-control\" \n             required minlength=\"4\" \n             forbiddenName=\"bob\" \n             type=\"password\" \n             placeholder=\"Enter Password\">\n    \n      <!-- <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n    \n        <div *ngIf=\"password.errors.required\">\n          password is required.\n        </div>\n        <div *ngIf=\"password.errors.minlength\">\n          password must be at least 4 characters long.\n        </div>\n        <div *ngIf=\"password.errors.forbiddenName\">\n          password cannot be Bob.\n        </div>\n      </div> -->\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"comment\">Comment</label>\n      <textarea type=\"text\"\n                formControlName=\"comment\"\n                name=\"comment\"\n                id=\"comment\"\n                col=\"30\"\n                rows=\"10\" \n                class=\"form-control\">\n      </textarea>\n    </div>\n    <button class=\"btn btn-primary\" type=\"button\" [disabled]=\"userForm.status == 'invalid'\" (click)=\"sumbitForm()\">Submit</button>\n  </form>\n  <a class=\"navbar-brand\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-register/user-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service_service__ = __webpack_require__("../../../../../src/app/service/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_model__ = __webpack_require__("../../../../../src/app/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegisterComponent = (function () {
    function UserRegisterComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user_model__["a" /* User */]();
        this.dataService = _dataService;
        this.router = _router;
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        //Creating a new user form 
        this.createForm();
    };
    UserRegisterComponent.prototype.createForm = function () {
        this.userForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            comment: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required)
        });
    };
    UserRegisterComponent.prototype.sumbitForm = function () {
        var _this = this;
        console.log(this.userForm);
        this.user = {
            name: this.userForm.get('name').value,
            password: this.userForm.get('password').value,
            comment: this.userForm.get('comment').value
        };
        this.dataService.addUser(this.user)
            .subscribe(function (respData) {
            console.log('logged in');
            _this.router.navigate(['/login']);
        }, function (respError) {
            console.log(respError);
        });
    };
    return UserRegisterComponent;
}());
UserRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-user-register',
        template: __webpack_require__("../../../../../src/app/user-register/user-register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-register/user-register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_data_service_service__["a" /* DataServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_data_service_service__["a" /* DataServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserRegisterComponent);

var _a, _b;
//# sourceMappingURL=user-register.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, password, comment) {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map