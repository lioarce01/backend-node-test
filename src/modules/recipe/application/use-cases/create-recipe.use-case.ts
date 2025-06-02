import { Injectable } from '@nestjs/common';
import { RecipeRepository } from '../../domain/repositories/recipe.repository.interface';
import { Recipe } from '../../domain/entities/recipe.entity';
import { CreateRecipeDto } from '../../interface/controllers/dto/create-recipe.dto';

@Injectable()
export class CreateRecipeUseCase {
  constructor(private readonly recipeRepo: RecipeRepository) {}

  async execute(dto: CreateRecipeDto): Promise<Recipe> {
    const { title, description, ingredients } = dto;

    const recipe = Recipe.createNew(title, description, ingredients);
    await this.recipeRepo.create(recipe);

    return recipe;
  }
}
