import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../Recipe';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html',
    styles: []
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very Tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
        new Recipe('Summer Salad', 'Okayish', 'http://homecaprice.com/wp-content/uploads/2015/05/2-salad1.jpg', [])
    ];
    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor() { }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }

    ngOnInit() {

    }

}
