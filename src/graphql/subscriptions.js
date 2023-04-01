/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateADCategory = /* GraphQL */ `
  subscription OnCreateADCategory(
    $filter: ModelSubscriptionADCategoryFilterInput
  ) {
    onCreateADCategory(filter: $filter) {
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
export const onUpdateADCategory = /* GraphQL */ `
  subscription OnUpdateADCategory(
    $filter: ModelSubscriptionADCategoryFilterInput
  ) {
    onUpdateADCategory(filter: $filter) {
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
export const onDeleteADCategory = /* GraphQL */ `
  subscription OnDeleteADCategory(
    $filter: ModelSubscriptionADCategoryFilterInput
  ) {
    onDeleteADCategory(filter: $filter) {
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
export const onCreateADBrand = /* GraphQL */ `
  subscription OnCreateADBrand($filter: ModelSubscriptionADBrandFilterInput) {
    onCreateADBrand(filter: $filter) {
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
export const onUpdateADBrand = /* GraphQL */ `
  subscription OnUpdateADBrand($filter: ModelSubscriptionADBrandFilterInput) {
    onUpdateADBrand(filter: $filter) {
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
export const onDeleteADBrand = /* GraphQL */ `
  subscription OnDeleteADBrand($filter: ModelSubscriptionADBrandFilterInput) {
    onDeleteADBrand(filter: $filter) {
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
export const onCreateADProduct = /* GraphQL */ `
  subscription OnCreateADProduct(
    $filter: ModelSubscriptionADProductFilterInput
  ) {
    onCreateADProduct(filter: $filter) {
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
export const onUpdateADProduct = /* GraphQL */ `
  subscription OnUpdateADProduct(
    $filter: ModelSubscriptionADProductFilterInput
  ) {
    onUpdateADProduct(filter: $filter) {
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
export const onDeleteADProduct = /* GraphQL */ `
  subscription OnDeleteADProduct(
    $filter: ModelSubscriptionADProductFilterInput
  ) {
    onDeleteADProduct(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
