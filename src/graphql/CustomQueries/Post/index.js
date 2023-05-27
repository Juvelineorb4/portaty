export const listCategories = /* GraphQL */ `
  query listCategories(
    $filter: ModelADCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listADCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        path
        products {
          items {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        brands {
          items {
            id
            aDCategoryId
            aDBrandId
            aDCategory {
              id
              name
              image
              path
              abreviation
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              path
              abreviation
              
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        abreviation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;