import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {Hero} from '../hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../service/hero.service';



//this is the interpolation form of one-way data binding
@Component({
  selector: 'my-heroes',
  templateUrl: "app/view/heroes.component.html",
   directives: [HeroDetailComponent],
   styleUrls:["app/css/heroes.component.css"]         

  
})


export class HeroesComponent implements OnInit{ 
    title ='Tours of Heros';
    selectedHero: Hero;
    public heroes:Hero[];
  
  constructor(private heroService:HeroService,
              private router:Router){ }
  
  //We pass our callback function as an argument to the promise's {then} method:
  getHeroes(){
      this.heroService.getHeroes().then(heroes => this.heroes=heroes);
  }
  
  ngOnInit(){
      this.getHeroes();
  }
  
  onSelect(hero:Hero){
        this.selectedHero=hero;
    }
    gotoDetail(){
            let link = ['HeroDetail',{id:this.selectedHero.id}]
            this.router.navigate(link);        
    }
}

