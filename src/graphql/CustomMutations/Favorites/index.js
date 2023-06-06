export const createFavoriteItem = /* GraphQL */ `
  mutation CreateFavoriteItem(
    $input: CreateFavoriteItemInput!
    $condition: ModelFavoriteItemConditionInput
  ) {
    createFavoriteItem(input: $input, condition: $condition) {
      id
      itemID
      customerShopID
      owner 
      createdAt
      updatedAt
    }
  }
`;
export const deleteFavoriteItem = /* GraphQL */ `
  mutation DeleteFavoriteItem(
    $input: DeleteFavoriteItemInput!
    $condition: ModelFavoriteItemConditionInput
  ) {
    deleteFavoriteItem(input: $input, condition: $condition) {
      id
    }
  }
`;