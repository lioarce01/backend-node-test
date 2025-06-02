import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateRecipeUseCase } from '../../application/use-cases/create-recipe.use-case';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { ListAllRecipesUseCase } from '../../application/use-cases/list-all-recipes.use-case';
import { GetRecipeByIdUseCase } from '../../application/use-cases/get-recipe-by-id.use-case';
import { RecipePresenter } from '../presenters/recipe.presenter';

@Controller('recipes')
export class RecipeController {
  constructor(
    private readonly createRecipe: CreateRecipeUseCase,
    private readonly listAllRecipes: ListAllRecipesUseCase,
    private readonly getRecipeById: GetRecipeByIdUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateRecipeDto) {
    const recipe = await this.createRecipe.execute(dto);
    return RecipePresenter.toHttp(recipe);
  }

  @Get()
  async listAll() {
    const recipes = await this.listAllRecipes.execute();
    return RecipePresenter.toHttpList(recipes);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const recipe = await this.getRecipeById.execute(id);

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return RecipePresenter.toHttp(recipe);
  }
}
