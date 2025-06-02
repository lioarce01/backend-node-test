import { Module } from '@nestjs/common';
import { RecipeController } from './interface/controllers/recipe.controller';
import { CreateRecipeUseCase } from './application/use-cases/create-recipe.use-case';
import { ListAllRecipesUseCase } from './application/use-cases/list-all-recipes.use-case';
import { InMemoryRecipeRepository } from './infrastructure/persistence/in-memory/recipe.repository';
import { GetRecipeByIdUseCase } from './application/use-cases/get-recipe-by-id.use-case';

@Module({
  controllers: [RecipeController],
  providers: [
    CreateRecipeUseCase,
    ListAllRecipesUseCase,
    GetRecipeByIdUseCase,
    {
      provide: 'RecipeRepository',
      useClass: InMemoryRecipeRepository,
    },
  ],
  exports: ['RecipeRepository'],
})
export class RecipeModule {}
