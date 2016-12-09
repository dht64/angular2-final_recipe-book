import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
	recipesChanged = new EventEmitter<Recipe[]>();
	private recipes: Recipe[] = [
		new Recipe('Pho', "Vietnamese beef noodle pho is an easy soup to fall in love with. Those chewy noodles, that savory broth, the tender slices of beef — all those crunchy, spicy, herby garnishes we get to toss on top.", 'http://a.ctimg.net/KoEuGOMmQIubestSahEhBA/pho-tai-nam-vietnamese-noodle-soup-recipe.1024x1024.jpg', [
			new Ingredient('Beef', 1),
			new Ingredient('Noddle', 1),
		]),
		new Recipe('Banh Mi', "There's a lot going on in these things: juicy layers of roasted pork; a rich schmear of pâté; a smattering of crunchy, punchy pickled vegetables; and a loaf of bread that's totally unique in its construction.", 'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1216/2016/08/lemongrass-pork-banhmi-3b.jpg', [
			new Ingredient('Bread', 1),
		]),
		new Recipe('Spring Rolls', "These spring rolls are a refreshing change from the usual fried variety, and have become a family favorite. They are great as a cool summertime appetizer, and are delicious dipped in one or both of the sauces.", 'http://www.girlmakesfood.com/wp-content/uploads/2012/08/Vegan-Spring-Rolls.jpg', [
			new Ingredient('Shrimp', 3),
			new Ingredient('Rice Wrapper', 3),
		]),
	];

  constructor(private http: Http) { }

  getRecipes() {
  	return this.recipes;
  }

  getRecipe(id: number) {
  	return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
  	this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
  	this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
  	this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
  	const body = JSON.stringify(this.recipes);
  	const headers = new Headers({
  		'Content-Type': 'application/json'
  	});
  	return this.http.put('https://angular2-f-recipe-book.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
  	return this.http.get('https://angular2-f-recipe-book.firebaseio.com/recipes.json')
  	.map((response: Response) => response.json())
  	.subscribe(
  		(data: Recipe[]) => {
  			this.recipes = data;
  			this.recipesChanged.emit(this.recipes);
  		}
  	);
  }

}
