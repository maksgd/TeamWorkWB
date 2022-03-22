import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  template: `
  <!-- Heroes -->
  <div class="margin">
    <h2 appTextModificatorHost>My Heroes</h2>

    <div class="margin">
      <label for="new-hero">Hero name: </label>
      <input id="new-hero" #heroName />

      <!-- (click) passes input value to add() and then clears the input -->
      <button type="button" class="add-button" (click)="add(heroName.value); heroName.value=''">
        Add hero
      </button>
    </div>

    <ul class="heroes">
      <li *ngFor="let hero of heroes">

        <a routerLink="/detail/{{hero.id}}">
          <span class="badge">{{hero.id}}</span>
          <span class="name">{{hero.name | fenceCase}}</span>
        </a>
        <button type="button" class="delete" title="delete hero" (click)="delete(hero)">x</button>

      </li>
    </ul>
  </div>
  <!-- /Heroes -->
  `,
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  
  heroes: IHero[] = [];

  constructor(private heroService: HeroService) { }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as IHero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
