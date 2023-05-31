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