import { Component, OnChanges, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent implements OnChanges, OnInit {
    @Input() selectedRecipe: Recipe;

    constructor(private sListService: ShoppingListService) { }

    onAddToShoppingList() {
        this.sListService.addItems(this.selectedRecipe.ingredients);
    }

    ngOnChanges() {
    }

    ngOnInit() {
    }

}
