import { Component, inject, Input, input } from '@angular/core';
import { RecipeService } from '../services/recipe-service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  recipeService = inject(RecipeService);

  id = input.required<string>();

  recipe = toSignal(toObservable(this.id).pipe(
    switchMap((id) => this.recipeService.getRecipeById(parseInt(id))),
  ))

  showId() {
    console.log(this.recipe());
  }
}
