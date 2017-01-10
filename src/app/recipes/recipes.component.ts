import { Component, OnInit } from '@angular/core';

import { Recipe, RecipeService } from './';

@Component({
    selector: 'rb-recipes',
    templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
    selectedRecipe: Recipe;

    constructor() { } 

    goToDetail(recipe: Recipe): void {
        this.selectedRecipe = recipe;
    }

    ngOnInit() {
    }
}
