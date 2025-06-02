import { Recipe } from '../../domain/entities/recipe.entity';

export class RecipePresenter {
  static toHttp(recipe: Recipe) {
    return {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
      createdAt: recipe.createdAt,
      updatedAt: recipe.updatedAt,
    };
  }

  static toHttpList(recipes: Recipe[]) {
    return recipes.map(this.toHttp);
  }
}
