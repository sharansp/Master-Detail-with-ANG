import { Component, Input ,OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';


import {Hero} from '../hero';   
import {HeroService} from '../service/hero.service';

@Component({
  selector :"my-hero-detail",
  templateUrl :"app/view/hero-detail.component.html",
  styleUrls:['app/css/hero-detail.component.css']  
})

export class HeroDetailComponent implements OnInit{
    @Input() 
    hero:Hero;
    
    constructor(private heroService: HeroService,
                private routeParams: RouteParams) {
                    
    }
    
    ngOnInit(){
        let id = +this.routeParams.get("id"); //converting string to number
        this.heroService.getHero(id).then(hero => this.hero=hero);
        
    }
    
    goBack() {
      window.history.back();
    }

}