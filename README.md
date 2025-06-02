# Recipe API - Backend - Node - NestJ

A simple REST API for managing recipes, built with **NestJS** following **Clean Architecture** and **Domain-Driven Design (DDD)** principles.

---

## Features

- Create a new recipe
- Get a recipe by ID
- List all available recipes

---

## Architecture

This project is structured using **Clean Architecture** and **DDD**, separating responsibilities into distinct layers:

- **Domain**: Business rules and entities (e.g., `Recipe`)
- **Application**: Use cases (e.g., `CreateRecipeUseCase`)
- **Interface**: Controllers, DTOs, Presenters
- **Infrastructure**: Persistence (e.g., in-memory repository)

---

## Entity: `Recipe`

Each recipe contains the following fields:

```ts
class Recipe {
  public readonly id: string;
  public title: string;
  public description: string;
  public ingredients: string[];
  public createdAt: Date;
  public updatedAt: Date;
}
```

---

## How to run locally

```bash
pnpm run start:watch
```

---

## API Endpoints

Base URL: `/api/v1`

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| `POST` | `/recipes`     | Create a new recipe |
| `GET`  | `/recipes`     | List all recipes    |
| `GET`  | `/recipes/:id` | Get recipe by ID    |

---

## Create a Recipe

**POST** `/api/v1/recipes`

### Body

```json
{
  "title": "Spaghetti Carbonara",
  "description": "Classic Italian pasta",
  "ingredients": ["pasta", "eggs", "cheese", "bacon"]
}
```

### Response

```json
{
  "id": "abc123",
  "title": "Spaghetti Carbonara",
  "description": "Classic Italian pasta",
  "ingredients": ["pasta", "eggs", "cheese", "bacon"],
  "createdAt": "2025-06-01T10:00:00.000Z",
  "updatedAt": "2025-06-01T10:00:00.000Z"
}
```

---

## Get All Recipes

**GET** `/api/v1/recipes`

### Response

```json
[
  {
    "id": "abc123",
    "title": "Spaghetti Carbonara",
    "description": "Classic Italian pasta",
    "ingredients": ["pasta", "eggs", "cheese", "bacon"],
    "createdAt": "2025-06-01T10:00:00.000Z",
    "updatedAt": "2025-06-01T10:00:00.000Z"
  }
]
```

---

## Get Recipe by ID

**GET** `/api/v1/recipes/:id`

### Example

`GET /api/v1/recipes/abc123`

### Response

```json
{
  "id": "abc123",
  "title": "Spaghetti Carbonara",
  "description": "Classic Italian pasta",
  "ingredients": ["pasta", "eggs", "cheese", "bacon"],
  "createdAt": "2025-06-01T10:00:00.000Z",
  "updatedAt": "2025-06-01T10:00:00.000Z"
}
```

---

## Running Tests

```bash
pnpm run test:watch
```

---

## Tech Stack

- [NestJS](https://nestjs.com/)
- TypeScript
- Jest (for unit testing)

---
