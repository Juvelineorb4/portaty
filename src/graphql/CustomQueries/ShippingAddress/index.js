export const getAddress = /* GraphQL */ `
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
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;