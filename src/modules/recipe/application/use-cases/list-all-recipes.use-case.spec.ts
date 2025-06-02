import { InMemoryRecipeRepository } from '../../infrastructure/persistence/in-memory/recipe.repository';
import { Recipe } from '../../domain/entities/recipe.entity';
import { ListAllRecipesUseCase } from './list-all-recipes.use-case';

describe('ListAllRecipesUseCase', () => {
  let useCase: ListAllRecipesUseCase;
  let repo: InMemoryRecipeRepository;

  beforeEach(() => {
    repo = new InMemoryRecipeRepository();
    useCase = new ListAllRecipesUseCase(repo);
  });

  it('should return a list of recipes', async () => {
    const recipe = new Recipe(
      '123',
      'Pizza',
      'Tasty Pizza',
      ['mozzarella', 'flour', 'sauce'],
      new Date(),
      new Date(),
    );

    await repo.create(recipe);

    const result = await useCase.execute();

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('123');
    expect(result[0].title).toBe('Pizza');
    expect(result[0].ingredients).toEqual(['mozzarella', 'flour', 'sauce']);
  });

  it('should return an empty array if no recipes exist', async () => {
    const result = await useCase.execute();
    expect(result).toEqual([]);
  });
});
