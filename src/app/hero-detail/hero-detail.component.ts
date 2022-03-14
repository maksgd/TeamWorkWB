import { Component, OnInit, Input } from '@angular/core';
import { IHero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  template: `
  <!-- Hero Detail -->

    <div *ngIf="hero">

      <h2>{{hero.name | uppercase}} Details</h2>
      <div><span>id: </span>{{hero.id}}</div>
        <div>
          <label for="hero-name">Hero name: </label>
          <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
      
    </div>

    <button mat-flat-button color="warn" type="button" (click)="goBack()">go back</button>
    <button mat-flat-button color="accent" type="button" (click)="save()">save</button>

  <!-- /Hero Detail -->
  `,
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  @Input() hero?: IHero;


  ngOnInit(): void {
  this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
