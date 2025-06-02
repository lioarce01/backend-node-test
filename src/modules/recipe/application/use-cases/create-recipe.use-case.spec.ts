// create-recipe.use-case.spec.ts
import { InMemoryRecipeRepository } from '../../infrastructure/persistence/in-memory/recipe.repository';
import { CreateRecipeDto } from '../../interface/controllers/dto/create-recipe.dto';
import { CreateRecipeUseCase } from './create-recipe.use-case';

describe('CreateRecipeUseCase', () => {
  let useCase: CreateRecipeUseCase;
  let repo: InMemoryRecipeRepository;

  beforeEach(() => {
    repo = new InMemoryRecipeRepository();
    useCase = new CreateRecipeUseCase(repo);
  });

  it('should create a new recipe and save it in the repository', async () => {
    const dto: CreateRecipeDto = {
      title: 'Pizza',
      description: 'Tasty Pizza',
      ingredients: ['mozzarella', 'flour', 'sauce'],
    };

    const recipe = await useCase.execute(dto);

    expect(recipe).toHaveProperty('id');
    expect(recipe.title).toBe(dto.title);
    expect(recipe.ingredients).toEqual(dto.ingredients);

    const all = await repo.listAll();
    expect(all.length).toBe(1);
    expect(all[0].title).toBe('Pizza');
  });
});
