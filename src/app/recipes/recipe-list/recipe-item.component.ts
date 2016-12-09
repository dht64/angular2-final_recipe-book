import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: ['img { border: 1px solid #cccccc;']
})
export class RecipeItemComponent {
	@Input() recipe: Recipe;
	@Input() recipeId: number;

  constructor() { }

}
