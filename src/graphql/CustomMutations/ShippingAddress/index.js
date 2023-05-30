export const createCustomerShippingAddress = /* GraphQL */ `
  mutation CreateCustomerShippingAddress(
    $input: CreateCustomerShippingAddressInput!
    $condition: ModelCustomerShippingAddressConditionInput
  ) {
    createCustomerShippingAddress(input: $input, condition: $condition) {
      id
      customerID
      country
      postal
      title
      city
      address
    }
  }
`;