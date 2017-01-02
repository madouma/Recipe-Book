import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../Recipe';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html',
    styles: []
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];
    recipe: Recipe = new Recipe('dummy', 'dummy description', 'https://ae01.alicdn.com/kf/HTB1lRHAMpXXXXasXFXXq6xXFXXXy/Indoor-Outdoor-Solar-Powered-font-b-Fake-b-font-font-b-Dummy-b-font-Security-Camera.jpg');
    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor() { }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }

    ngOnInit() {

    }

}
