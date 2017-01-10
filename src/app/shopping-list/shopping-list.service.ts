import { Ingredient } from '../shared';

export class ShoppingListService {
    private items: Ingredient[] = [];

    constructor() { }

    getItems(): Ingredient[] {
        return this.items;
    }

    addItems(items: Ingredient[]) {
        items.forEach(item => this.items.push(item));
    }
}
