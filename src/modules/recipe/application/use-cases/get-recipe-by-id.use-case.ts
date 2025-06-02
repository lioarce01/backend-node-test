import { Injectable } from '@nestjs/common';
import { RecipeRepository } from '../../domain/repositories/recipe.repository.interface';
import { Recipe } from '../../domain/entities/recipe.entity';

@Injectable()
export class GetRecipeByIdUseCase {
  constructor(private readonly recipeRepo: RecipeRepository) {}

  async execute(id: string): Promise<Recipe | null> {
    return await this.recipeRepo.getById(id);
  }
}
