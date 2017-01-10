import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent, RecipeService } from './recipes';
import { RecipeListComponent, RecipeItemComponent} from './recipes/recipe-list';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent, ShoppingListAddComponent } from './shopping-list';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ RecipeService, ShoppingListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
