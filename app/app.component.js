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
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var hero_service_1 = require('./service/hero.service');
var heroes_component_1 = require('./component/heroes.component');
var dashboard_component_1 = require('./component/dashboard.component');
var hero_detail_component_1 = require('./component/hero-detail.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/view/app.component.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, hero_service_1.HeroService],
            styleUrls: ["app/css/app.component.css"]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/heroes',
                name: 'Heroes',
                component: heroes_component_1.HeroesComponent
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:id',
                name: 'HeroDetail',
                component: hero_detail_component_1.HeroDetailComponent
            },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map