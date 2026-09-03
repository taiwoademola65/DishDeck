import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Recipe, RecipeResponse } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  url = 'https://dummyjson.com/recipes';
  http = inject(HttpClient);

  getRecipes(){
    return this.http.get<RecipeResponse>(this.url).pipe(map(response => response))
  }

  getRecipeById(id: number){
    return this.http.get<Recipe>(`${this.url}/${id}`).pipe(map(res => res))
  }
}
