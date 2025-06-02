import { Recipe } from '../entities/recipe.entity';

export interface RecipeRepository {
  listAll(): Promise<Recipe[]>;
  getById(id: string): Promise<Recipe | null>;
  create(recipe: Recipe): Promise<void>;
}
