export const getCustomerShop = /* GraphQL */ `
  query GetCustomerShop($userID: ID!) {
    getCustomerShop(userID: $userID) {
      userID
      name
      email
      description
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
      salesOrders {
        items {
          total
          items {
            items {
              id
              item {
                product {
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
                }
              }
              createdAt
            }
            nextToken
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
          total
          items {
            items {
              item {
                product {
                  productID
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
                }
              }
              createdAt
            }
            nextToken
          }
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
    }
  }
`;
export const getOrderDetail = /* GraphQL */ `
  query GetOrderDetail($id: ID!) {
    getOrderDetail(id: $id) {
      id
      purchaseUserID
      salesUserID
      total
      items {
        items {
          createdAt
          id
          orderID
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              customer {
                userID
                name
              }
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
            status
          }
        }
        nextToken
      }
      paymentID
      payment {
        id
        paymentStripeID
        metadata
      }
      shippingAddress {
        country
        postal
        city
        address
        phoneNumber
      }
    }
  }
`;
export const listCustomerProductStatus = /* GraphQL */ `
  query ListCustomerProductStatuses(
    $filter: ModelCustomerProductStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerProductStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            identityId
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
          paths
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
      nextToken
    }
  }
`;
export const getADProductPrueba = /* GraphQL */ `
  query GetADProduct($id: ID!) {
    getADProduct(id: $id) {
      id
      name
    }
  }
`;