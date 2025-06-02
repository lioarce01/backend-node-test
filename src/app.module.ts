import { Module } from '@nestjs/common';
import { RecipeModule } from './modules/recipe/recipe.module';

@Module({
  imports: [RecipeModule],
})
export class AppModule {}
