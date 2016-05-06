import { Component,Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { OnInit } from '@angular/core';

import {HeroService} from '../service/hero.service';
import {Hero} from '../hero';



@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/view/dashboard.component.html',
  styleUrls:['app/css/dashboard.component.css']
})

export class DashboardComponent implements  OnInit{
  public heroes:Hero[];
    
  constructor(private heroService:HeroService,
              private router:Router){ }
  
  getHeroes(){
      this.heroService.getHeroes().then(heroes => this.heroes=heroes.slice(1,5));
  }
  
  ngOnInit(){
      this.getHeroes();
  }
  
  gotoDetail(hero:Hero){
     let link=['HeroDetail',{id:hero.id}];
       this.router.navigate(link);
    
  }
 
    
 }
