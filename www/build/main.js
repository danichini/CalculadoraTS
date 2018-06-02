webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.regexp = new RegExp(/[-+*\/]{2,3}/g);
        this.Operacion = "";
    }
    HomePage.prototype.addSuma = function () {
        var isExisting = this.regexp.test(this.Operacion);
        if (isExisting === false) {
            this.save = this.Operacion;
            this.Operacion = this.Operacion + "+";
            var isExisting_1 = this.regexp.test(this.Operacion);
            if (isExisting_1 === true) {
                this.Err = "debe agregar un numero depues de un simbolo";
                this.Operacion = this.save;
            }
        }
        else {
            this.Err = "debe agregar un numero depues de un simbolo2";
        }
    };
    HomePage.prototype.addResta = function () {
        var isExisting = this.regexp.test(this.Operacion);
        if (isExisting === false) {
            this.save = this.Operacion;
            this.Operacion = this.Operacion + "-";
            var isExisting_2 = this.regexp.test(this.Operacion);
            if (isExisting_2 === true) {
                this.Err = "debe agregar un numero depues de un simbolo";
                this.Operacion = this.save;
            }
        }
        else {
            this.Err = "debe agregar un numero depues de un simbolo2";
        }
    };
    HomePage.prototype.addMult = function () {
        var isExisting = this.regexp.test(this.Operacion);
        if (isExisting === false) {
            this.save = this.Operacion;
            this.Operacion = this.Operacion + "*";
            var isExisting_3 = this.regexp.test(this.Operacion);
            if (isExisting_3 === true) {
                this.Err = "debe agregar un numero depues de un simbolo";
                this.Operacion = this.save;
            }
        }
        else {
            this.Err = "debe agregar un numero depues de un simbolo2";
        }
    };
    HomePage.prototype.addDivi = function () {
        var isExisting = this.regexp.test(this.Operacion);
        if (isExisting === false) {
            this.save = this.Operacion;
            this.Operacion = this.Operacion + "/";
            var isExisting_4 = this.regexp.test(this.Operacion);
            if (isExisting_4 === true) {
                this.Err = "debe agregar un numero depues de un simbolo";
                this.Operacion = this.save;
            }
        }
        else {
            this.Err = "debe agregar un numero depues de un simbolo2";
        }
    };
    HomePage.prototype.add0 = function () {
        this.Operacion = this.Operacion + "0";
    };
    HomePage.prototype.add1 = function () {
        this.Operacion = this.Operacion + "1";
    };
    HomePage.prototype.add2 = function () {
        this.Operacion = this.Operacion + "2";
    };
    HomePage.prototype.add3 = function () {
        this.Operacion = this.Operacion + "3";
    };
    HomePage.prototype.add4 = function () {
        this.Operacion = this.Operacion + "4";
    };
    HomePage.prototype.add5 = function () {
        this.Operacion = this.Operacion + "5";
    };
    HomePage.prototype.add6 = function () {
        this.Operacion = this.Operacion + "6";
    };
    HomePage.prototype.add7 = function () {
        this.Operacion = this.Operacion + "7";
    };
    HomePage.prototype.add8 = function () {
        this.Operacion = this.Operacion + "8";
    };
    HomePage.prototype.add9 = function () {
        this.Operacion = this.Operacion + "9";
    };
    HomePage.prototype.resultado = function () {
        this.Resultado = eval(this.Operacion);
        if (isNaN(this.Resultado) === true) {
            this.Err = "culliao papi";
        }
        else {
            this.Err = "";
        }
    };
    HomePage.prototype.borrar = function () {
        this.Operacion = "";
        this.Resultado = 0;
        this.Err = "";
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\DanielReverolAngel\Downloads\4-URU\Moviles\CalculadoraTS\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Calculadora\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <h1>{{Operacion}}</h1>\n\n  <br>\n\n  <button ion-button color="light" strong=true (click)=\'add1();\'>1</button>\n\n  <button ion-button color="light" strong=true (click)=\'add2();\'>2</button>\n\n  <button ion-button color="light" strong=true (click)=\'add3();\'>3</button>\n\n  <br>\n\n  <button ion-button color="light" strong=true (click)=\'add4();\'>4</button>\n\n  <button ion-button color="light" strong=true (click)=\'add5();\'>5</button>\n\n  <button ion-button color="light" strong=true (click)=\'add6();\'>6</button>\n\n  <br>\n\n  <button ion-button color="light" strong=true (click)=\'add7();\'>7</button>\n\n  <button ion-button color="light" strong=true (click)=\'add8();\'>8</button>\n\n  <button ion-button color="light" strong=true (click)=\'add9();\'>9</button>\n\n  <button ion-button color="light" strong=true (click)=\'add0();\'>0</button>\n\n  <br>\n\n  <button ion-button color="dark" strong=true (click)=\'addSuma();\'>+</button>\n\n  <button ion-button color="dark" strong=true (click)=\'addResta();\'>-</button>\n\n  <button ion-button color="dark" strong=true (click)=\'addMult();\'>x</button>\n\n  <button ion-button color="dark" strong=true (click)=\'addDivi();\'>/</button>\n\n  <br>\n\n  <button ion-button color="dark" strong=true (click)=\'resultado();\'>Resolver</button>\n\n  <button ion-button color="dark" strong=true (click)=\'borrar();\'>Borrar</button>\n\n\n\n  <h1>El resultado es: {{Resultado}}</h1>\n\n  <h6>{{Err}}</h6>\n\n  <!-- INPUTS  -->\n\n  \n\n  <!-- <ion-list>\n\n    <ion-item>\n\n      <ion-label fixed>Username</ion-label>\n\n      <ion-input type="text" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Username"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Username</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  </ion-list> -->\n\n\n\n  <!-- BUTTONS -->\n\n  <!-- <button ion-button color="light">Light</button>\n\n  <button ion-button color="danger" outline>Danger Outline</button>\n\n  <button ion-button color="secondary" clear>Secondary Clear</button>\n\n  <button ion-button color="dark" round>Dark Round</button>\n\n  <button ion-button block>Block Button</button>\n\n  <button ion-button icon-only>\n\n    Right Icon\n\n    <ion-icon name="home"></ion-icon>\n\n  </button> -->\n\n\n\n  <!-- GRID -->\n\n  <!-- <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>This column will take 12 columns</ion-col>\n\n      <ion-col col-6>This column will take 6 columns</ion-col>\n\n      <ion-col col-3>This column will take 3 columns</ion-col>\n\n      <ion-col col-3>This column will take 3 columns</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label floating>Username</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-label fixed>Username</ion-label>\n\n          <ion-input type="text" value=""></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <ion-item>\n\n          <ion-label floating>Username</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <button ion-button color="danger" outline>Danger Outline</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid> -->\n\n\n\n  <!-- DATA BINDING -->\n\n  <!-- <ion-row>\n\n    <ion-col col-6>\n\n      <ion-item>\n\n        <ion-label fixed>Nombre</ion-label>\n\n        <ion-input [(ngModel)]="name" type="text" value=""></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col col-3>\n\n      <p>Hola {{name}}</p>\n\n    </ion-col>\n\n  </ion-row> -->\n\n\n\n  <!-- ngFor LISTA DE NUMEROS-->\n\n  <!-- <ion-row>\n\n    <ion-col col-3>\n\n      <p *ngFor="let item of test">{{item}}</p>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content> -->\n\n\n\n  <!-- ngIf QUE MUESTRA MENSAJE CUANDO FLAG ES TRUE -->\n\n  <!-- <ion-row>\n\n    <ion-col col-s5>\n\n      <p *ngIf="flag">Es true</p>\n\n    </ion-col>\n\n  </ion-row> -->\n\n\n\n\n\n  <!-- INPUT CON MODEL QUE AGREGA DINAMICAMENTE NUMERO A LISTA -->\n\n  <!-- <ion-item>\n\n    <ion-label floating>number</ion-label>\n\n    <ion-input [(ngModel)]="addNumber" type="number"></ion-input>\n\n  </ion-item>\n\n  <button ion-button color="danger" outline (click)=\'add(addNumber)\'>Danger Outline</button>\n\n  <p *ngFor="let item of numbers">{{item}}</p> -->\n\n'/*ion-inline-end:"C:\Users\DanielReverolAngel\Downloads\4-URU\Moviles\CalculadoraTS\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
], HomePage);

var _a;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(192);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\DanielReverolAngel\Downloads\4-URU\Moviles\CalculadoraTS\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\DanielReverolAngel\Downloads\4-URU\Moviles\CalculadoraTS\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map