export const updateChargeIdentityIdCustomerShop = /* GraphQL */ `
  mutation updateChargeIdentityIdCustomerShop(
    $input: UpdateCustomerShopInput!
    $condition: ModelCustomerShopConditionInput
  ) {
    updateCustomerShop(input: $input, condition: $condition) {
      userID
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
      content
      createdAt
      updatedAt
      owner
    }
  }
`;