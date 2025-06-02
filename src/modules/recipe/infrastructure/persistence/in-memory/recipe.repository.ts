import { Recipe } from 'src/modules/recipe/domain/entities/recipe.entity';
import { RecipeRepository } from 'src/modules/recipe/domain/repositories/recipe.repository.interface';

export class InMemoryRecipeRepository implements RecipeRepository {
  private recipes = new Map<string, Recipe>();

  async listAll(): Promise<Recipe[]> {
    return Array.from(this.recipes.values());
  }

  async getById(id: string): Promise<Recipe | null> {
    return this.recipes.get(id) ?? null;
  }

  async create(recipe: Recipe): Promise<void> {
    this.recipes.set(recipe.id, recipe);
  }
}
