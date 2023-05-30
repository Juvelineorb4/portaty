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
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          customerShopID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      salesOrders {
        items {
          id
          purchaseUserID
          salesUserID
          total
          items {
            items {
              id
              orderID
              itemID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          paymentID
          payment {
            id
            paymentStripeID
            metadata
            createdAt
            updatedAt
            owner
          }
          shippingAddress {
            country
            postal
            city
            address
            phoneNumber
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      purchaseOrders {
        items {
          id
          purchaseUserID
          salesUserID
          total
          items {
            items {
              id
              orderID
              itemID
              item {
                product {
                  productID
                }
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          paymentID
          payment {
            id
            paymentStripeID
            metadata
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      products {
        items {
          id
          customerID
          customer {
            userID
            name
            email
            description
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            owner
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
              categoryID
              brandID
              productID
              code
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
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
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        nextToken
      }
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