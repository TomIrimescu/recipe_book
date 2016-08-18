import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { RecipesComponent } from "./recipes";
import { RecipeListComponent } from "./recipes/recipe-list"
import { RecipeItemComponent } from "./recipes/recipe-list"


@NgModule({
	declarations: [AppComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeItemComponent],
	imports: [BrowserModule, FormsModule ],
	bootstrap: [AppComponent]
})

export class AppModule {}
