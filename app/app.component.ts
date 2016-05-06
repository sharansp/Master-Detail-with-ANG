import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Component } from '@angular/core';

import { HeroService } from './service/hero.service';
import { HeroesComponent } from './component/heroes.component';
import { DashboardComponent } from './component/dashboard.component';
import {HeroDetailComponent} from './component/hero-detail.component'


					@Component({
						 selector: 'my-app',
						 templateUrl: "app/view/app.component.html",
							  
						 directives: [ROUTER_DIRECTIVES],
						 providers: [ROUTER_PROVIDERS,HeroService],
						 styleUrls:["app/css/app.component.css"]
					})

					@RouteConfig([
					  { 
						path: '/heroes',
						name: 'Heroes',
						component: HeroesComponent
					  },
					  {
					  path: '/dashboard',
					  name: 'Dashboard',
					  component: DashboardComponent,
					  useAsDefault: true
					 },
					 {
					  path: '/detail/:id',
					  name: 'HeroDetail',
					  component: HeroDetailComponent
					 },
					])

					export class AppComponent {
						title = 'Tour of Heroes';
					}