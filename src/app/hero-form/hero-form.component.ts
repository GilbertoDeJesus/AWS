import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  heroObj = new Hero(20, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  get formValues(){
    return JSON.stringify(this.heroObj);
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.heroObj);
  }

}
