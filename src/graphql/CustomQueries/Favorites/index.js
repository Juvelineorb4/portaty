export const getCustomerShop = /* GraphQL */ `
  query GetCustomerShop($userID: ID!) {
    getCustomerShop(userID: $userID) {
      userID
      name
      email
      description
      favorites {
        items {
          id
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              price
              adproduct {
                name
              }
              paths
              customer {
                name
                userID
                identityId
              }
              condition
              description
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          customerShopID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const getCustomerProductStatus = /* GraphQL */ `
  query GetCustomerProductStatus($id: ID!) {
    getCustomerProductStatus(id: $id) {
      id
      productID
      product {
        id
        customerID
        customer {
          userID
          name
          identityId
          email
          description
          products {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              price
              condition
              description
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        categoryID
        categoryFields {
          name
          image
          abreviation
        }
        brandID
        brandFields {
          name
          image
          abreviation
        }
        productID
        adproduct {
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
            display {
              resolution
              screenSize
              ppi
            }
            camera {
              primary
              secondary
              resolution
            }
            battery {
              capacity
              duration
              usb
            }
          }
          createdAt
          updatedAt
        }
        productFields {
          name
          images
        }
        code
        price
        condition
        description
        status {
          id
          productID
          product {
            id
            customerID
            customer {
              userID
              name
              email
              description
              createdAt
              updatedAt
            }
            categoryID
            categoryFields {
              name
              image
              abreviation
            }
            brandID
            brandFields {
              name
              image
              abreviation
            }
            productID
            adproduct {
              id
              name
              images
              paths
              description
              suggestedPrice
              categoryID
              brandID
              
              createdAt
              updatedAt
            }
            productFields {
              name
              images
            }
            code
            price
            condition
            description
            status {
              id
              productID
              status
              createdAt
              updatedAt
            }
            phoneFields {
              carrier
              imei
              model
              storage
              batery
            }
            laptoFields {
              serial
            }
            createdAt
            updatedAt
            customerProductStatusId
          }
          status
          createdAt
          updatedAt
        }
        phoneFields {
          carrier
          imei
          model
          storage
          batery
        }
        laptoFields {
          serial
        }
        createdAt
        updatedAt
        customerProductStatusId
      }
      status
      createdAt
      updatedAt
    }
  }
`;