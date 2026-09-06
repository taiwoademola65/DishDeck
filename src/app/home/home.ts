import { Component, inject } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../services/recipe-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  recipeService = inject(RecipeService);

  recipeResponse = toSignal(this.recipeService.getRecipes());
}
