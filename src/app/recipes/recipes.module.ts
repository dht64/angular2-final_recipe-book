import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//import { CommonModule } from '@angular/common'; //replaced by SharedModule

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { recipesRouting } from './recipes.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		RecipesComponent,
		RecipeListComponent,
		RecipeItemComponent,
		RecipeDetailComponent,
		RecipeStartComponent,
		RecipeEditComponent
	],
	imports: [
		SharedModule, 
		ReactiveFormsModule,
		recipesRouting,
	]
})

export class RecipesModule {}