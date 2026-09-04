import { Component, inject } from '@angular/core';
import { RecipeService } from '../services/recipe-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Navbar } from "../navbar/navbar";
import { RouterOutlet, RouterLink } from "../../../node_modules/@angular/router/types/_router_module-chunk";
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-recipe-list',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  recipeService = inject(RecipeService);
  
  recipeResponse = toSignal(this.recipeService.getRecipes())

  
}
