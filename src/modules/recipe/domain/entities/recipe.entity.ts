import { randomUUID } from 'crypto';

export class Recipe {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public ingredientes: string[],
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  static createNew(
    title: string,
    description: string,
    ingredients: string[],
  ): Recipe {
    const now = new Date();
    return new Recipe(randomUUID(), title, description, ingredients, now, now);
  }
}
