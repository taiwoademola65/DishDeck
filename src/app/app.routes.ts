import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { ErrorPage } from './error-page/error-page';

export const routes: Routes = [
  {path: '',  component: Home},
  {path: 'recipeList', component: RecipeList},
  {path: 'recipe/:id', component: RecipeDetail},
  {path: '**', component: ErrorPage}
];
