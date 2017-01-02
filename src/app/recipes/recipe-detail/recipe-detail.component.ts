import { Component, OnChanges, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnChanges, OnInit {
  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnChanges() {
    debugger;
  }

  ngOnInit() {
  }

}
