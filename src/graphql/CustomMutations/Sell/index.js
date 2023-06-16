export const createOrderDetail = /* GraphQL */ `
  mutation CreateOrderDetail(
    $input: CreateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    createOrderDetail(input: $input, condition: $condition) {
      id
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
    }
  }
`;

export const updateCustomerProductStatus = /* GraphQL */ `
  mutation UpdateCustomerProductStatus(
    $input: UpdateCustomerProductStatusInput!
    $condition: ModelCustomerProductStatusConditionInput
  ) {
    updateCustomerProductStatus(input: $input, condition: $condition) {
      id
    }
  }
`;

export const createPaymentStripe = /* GraphQL */ `
  mutation CreatePaymentStripe(
    $input: CreatePaymentStripeInput!
    $condition: ModelPaymentStripeConditionInput
  ) {
    createPaymentStripe(input: $input, condition: $condition) {
      id
      paymentStripeID
      metadata
      createdAt
      updatedAt
    }
  }
`;