import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared';
import { ShoppingListService } from './shopping-list.service'

@Component({
    selector: 'rb-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit {
    items: Ingredient[] = [];

    constructor(private sListService: ShoppingListService) { }

    ngOnInit() {
        this.items = this.sListService.getItems();
    }
}
