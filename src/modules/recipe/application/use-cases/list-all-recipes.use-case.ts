import { Inject, Injectable } from '@nestjs/common';
import { RecipeRepository } from '../../domain/repositories/recipe.repository.interface';
import { Recipe } from '../../domain/entities/recipe.entity';

@Injectable()
export class ListAllRecipesUseCase {
  constructor(
    @Inject('RecipeRepository') private readonly recipeRepo: RecipeRepository,
  ) {}

  async execute(): Promise<Recipe[]> {
    return await this.recipeRepo.listAll();
  }
}
