import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  template: `
  <!-- Dashboard -->

    <h2>Top Heroes</h2>
    <div class="heroes-menu">

      <a *ngFor="let hero of heroes"
        routerLink="/detail/{{hero.id}}">
        {{hero.name | fenceCase}}
      </a>

    </div>
    
    <app-hero-search></app-hero-search>
  <!-- /Dashboard -->
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: IHero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
