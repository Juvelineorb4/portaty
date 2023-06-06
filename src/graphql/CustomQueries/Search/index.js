export const getADProduct = /* GraphQL */ `
  query GetADProduct($id: ID!) {
    getADProduct(id: $id) {
      id
      name
    }
  }
`;
export const listADProducts = /* GraphQL */ `
  query ListADProducts(
    $filter: ModelADProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listADProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
     }  
    }
  }
`;

export const listADBrands = /* GraphQL */ `
  query ListADBrands(
    $filter: ModelADBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listADBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        products {
          items {
            id
            name
            images
          }
        }
      }
 
    }
  }
`;