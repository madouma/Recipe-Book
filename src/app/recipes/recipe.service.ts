import { Injectable } from '@angular/core';

import { Recipe } from './';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very Tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
            new Ingredient('French Fries', 2),
            new Ingredient('Lamb meat', 1)
        ]),
        new Recipe('Summer Salad', 'Okayish', 'http://homecaprice.com/wp-content/uploads/2015/05/2-salad1.jpg', [])
    ];

    constructor() { }

    getRecipes(): Recipe[] {
        return this.recipes;
    }

}
