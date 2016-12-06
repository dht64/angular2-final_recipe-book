import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipe = new Recipe('Yummy', 'Yummy', 'http://a.ctimg.net/KoEuGOMmQIubestSahEhBA/pho-tai-nam-vietnamese-noodle-soup-recipe.1024x1024.jpg')

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
  	this.recipeSelected.emit(recipe);
  }

}
