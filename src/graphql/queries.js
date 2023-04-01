/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getADCategory = /* GraphQL */ `
  query GetADCategory($id: ID!) {
    getADCategory(id: $id) {
      id
      name
      image
      products {
        items {
          id
          name
          images
          suggestedPrice
          categoryID
          brandID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listADCategories = /* GraphQL */ `
  query ListADCategories(
    $filter: ModelADCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listADCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getADBrand = /* GraphQL */ `
  query GetADBrand($id: ID!) {
    getADBrand(id: $id) {
      id
      name
      image
      products {
        items {
          id
          name
          images
          suggestedPrice
          categoryID
          brandID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listADBrands = /* GraphQL */ `
  query ListADBrands(
    $filter: ModelADBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listADBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getADProduct = /* GraphQL */ `
  query GetADProduct($id: ID!) {
    getADProduct(id: $id) {
      id
      name
      images
      suggestedPrice
      categoryID
      brandID
      createdAt
      updatedAt
    }
  }
`;
export const listADProducts = /* GraphQL */ `
  query ListADProducts(
    $filter: ModelADProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listADProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        images
        suggestedPrice
        categoryID
        brandID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aDProductsByCategoryIDAndName = /* GraphQL */ `
  query ADProductsByCategoryIDAndName(
    $categoryID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelADProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aDProductsByCategoryIDAndName(
      categoryID: $categoryID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        images
        suggestedPrice
        categoryID
        brandID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aDProductsByBrandIDAndName = /* GraphQL */ `
  query ADProductsByBrandIDAndName(
    $brandID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelADProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aDProductsByBrandIDAndName(
      brandID: $brandID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        images
        suggestedPrice
        categoryID
        brandID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
