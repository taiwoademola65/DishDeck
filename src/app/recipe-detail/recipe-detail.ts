import { Component, inject } from '@angular/core';
import { RecipeService } from '../services/recipe-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  recipeService = inject(RecipeService);
  recipeResponse = toSignal(this.recipeService.getRecipeById(1))
}
