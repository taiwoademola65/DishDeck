import { Component, inject, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { RouterLink } from "@angular/router";
import { RecipeService } from '../services/recipe-service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, RouterLink, ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  recipeService =  inject(RecipeService);

  recipes = signal<Recipe[]>([]);
  
}
