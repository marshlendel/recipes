import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Watermelon", 100),
    new Ingredient("Pineapple", 59)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
