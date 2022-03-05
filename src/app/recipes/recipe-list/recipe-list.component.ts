import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pizza", "The GOAT of foods", "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"), 
    new Recipe("Fruit Salad", "yummy yummy", "https://images.pexels.com/photos/3085148/pexels-photo-3085148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
