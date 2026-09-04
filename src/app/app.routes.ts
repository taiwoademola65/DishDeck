import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';

export const routes: Routes = [
  {path: '',  component: Home},
  {path: 'recipeList', component: RecipeList},
  {path: 'recipe/:id', component: RecipeDetail}
];
