import { Routes } from '@angular/router';
import { RecipeList } from './recipe-list/recipe-list';
import { App } from './app';

export const routes: Routes = [
  {path: '',  component: RecipeList}
];
