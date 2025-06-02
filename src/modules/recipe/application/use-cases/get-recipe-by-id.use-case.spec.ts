import { InMemoryRecipeRepository } from '../../infrastructure/persistence/in-memory/recipe.repository';
import { GetRecipeByIdUseCase } from './get-recipe-by-id.use-case';
import { Recipe } from '../../domain/entities/recipe.entity';

describe('GetRecipeByIdUseCase', () => {
  let useCase: GetRecipeByIdUseCase;
  let repo: InMemoryRecipeRepository;

  beforeEach(() => {
    repo = new InMemoryRecipeRepository();
    useCase = new GetRecipeByIdUseCase(repo);
  });

  it('should get a recipe by id', async () => {
    const recipe = new Recipe(
      '123',
      'Pizza',
      'Tasty Pizza',
      ['mozzareilla', 'flour', 'sauce'],
      new Date(),
      new Date(),
    );

    await repo.create(recipe);

    const result = await useCase.execute('123');

    expect(result).not.toBeNull();
    expect(result?.id).toBe('123');
    expect(result?.title).toBe('Pizza');
    expect(result?.ingredients).toEqual(['mozzareilla', 'flour', 'sauce']);
  });

  it('should return null if recipe is not found', async () => {
    const result = await useCase.execute('non-existent-id');
    expect(result).toBeNull();
  });
});
