import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe, RecipeService } from '../';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];
    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipeService) { }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

}
