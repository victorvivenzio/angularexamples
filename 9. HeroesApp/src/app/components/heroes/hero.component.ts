import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  public hero: Hero = {
    name: '',
    house: '',
    bio: ''
  };

  public action: boolean = true; // true = edit, false = new
  public id: string;

  constructor(
    private _heroService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      if (this.id !== 'new'){
        this._heroService.getHero( this.id ).subscribe( data => this.hero = data );
      }
    });
  }

  ngOnInit() {
  }

  public save(): void {
    console.log(this.hero);
    if(this.id === 'new') {
      this.action = false;
    } else {
      this.action = true;
    }
    if (!this.action){
      this._heroService.newHero( this.hero ).subscribe( data => {
          this.router.navigate(['hero', data.name]);
        },
        error => console.log( error ));
    } else {
      this._heroService.editHero( this.hero, this.id ).subscribe( data => {
          // this.router.navigate(['hero', data.key$]);
        },
        error => console.log( error ));
    }

  }

  public newHero( form: NgForm ) {
    this.router.navigate(['/hero', 'new']);
    form.reset({
      house: ''
    });
  }
}
