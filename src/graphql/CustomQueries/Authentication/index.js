export const listEmailsPasswords = /* GraphQL */ `
  query ListCustomerShops(
    $userID: ID
    $filter: ModelCustomerShopFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCustomerShops(
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userID
        name
        email
      }
      nextToken
    }
  }
`;