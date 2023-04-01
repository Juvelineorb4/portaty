/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createADCategory = /* GraphQL */ `
  mutation CreateADCategory(
    $input: CreateADCategoryInput!
    $condition: ModelADCategoryConditionInput
  ) {
    createADCategory(input: $input, condition: $condition) {
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
export const updateADCategory = /* GraphQL */ `
  mutation UpdateADCategory(
    $input: UpdateADCategoryInput!
    $condition: ModelADCategoryConditionInput
  ) {
    updateADCategory(input: $input, condition: $condition) {
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
export const deleteADCategory = /* GraphQL */ `
  mutation DeleteADCategory(
    $input: DeleteADCategoryInput!
    $condition: ModelADCategoryConditionInput
  ) {
    deleteADCategory(input: $input, condition: $condition) {
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
export const createADBrand = /* GraphQL */ `
  mutation CreateADBrand(
    $input: CreateADBrandInput!
    $condition: ModelADBrandConditionInput
  ) {
    createADBrand(input: $input, condition: $condition) {
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
export const updateADBrand = /* GraphQL */ `
  mutation UpdateADBrand(
    $input: UpdateADBrandInput!
    $condition: ModelADBrandConditionInput
  ) {
    updateADBrand(input: $input, condition: $condition) {
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
export const deleteADBrand = /* GraphQL */ `
  mutation DeleteADBrand(
    $input: DeleteADBrandInput!
    $condition: ModelADBrandConditionInput
  ) {
    deleteADBrand(input: $input, condition: $condition) {
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
export const createADProduct = /* GraphQL */ `
  mutation CreateADProduct(
    $input: CreateADProductInput!
    $condition: ModelADProductConditionInput
  ) {
    createADProduct(input: $input, condition: $condition) {
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
export const updateADProduct = /* GraphQL */ `
  mutation UpdateADProduct(
    $input: UpdateADProductInput!
    $condition: ModelADProductConditionInput
  ) {
    updateADProduct(input: $input, condition: $condition) {
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
export const deleteADProduct = /* GraphQL */ `
  mutation DeleteADProduct(
    $input: DeleteADProductInput!
    $condition: ModelADProductConditionInput
  ) {
    deleteADProduct(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
