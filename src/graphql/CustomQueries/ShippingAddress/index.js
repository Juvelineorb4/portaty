export const getCustomerShippingAddress = /* GraphQL */ `
  query GetCustomerShop($userID: ID!) {
    getCustomerShop(userID: $userID) {
      userID
      shippingAddress {
        items {
          id
          customerID
          country
          title
          postal
          city
          address
        }
        nextToken
      }
    }
  }
`;