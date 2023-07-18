export const createPostCustomerProduct = /* GraphQL */ `
  mutation createPostCustomerProduct(
    $input: CreateCustomerProductInput!
    $condition: ModelCustomerProductConditionInput
  ) {
    createCustomerProduct(input: $input, condition: $condition) {
      id
    }
  }
`;

export const createCustomerProductStatus = /* GraphQL */ `
  mutation CreateCustomerProductStatus(
    $input: CreateCustomerProductStatusInput!
    $condition: ModelCustomerProductStatusConditionInput
  ) {
    createCustomerProductStatus(input: $input, condition: $condition) {
      id
      productID
      product {
        id
        categoryFields {
          name
          image
          abreviation
        }
        brandFields {
          name
          image
          abreviation
        }
        productFields {
          name
          images
        }
        code
        price
        condition
        description
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
      createdAt
      updatedAt
    }
  }
`;

export const updateCustomerProduct = /* GraphQL */ `
  mutation UpdateCustomerProduct(
    $input: UpdateCustomerProductInput!
    $condition: ModelCustomerProductConditionInput
  ) {
    updateCustomerProduct(input: $input, condition: $condition) {
      id
      customerID
      customer {
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
              status
              owner
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
        products {
          items {
            id
            customerID
            customer {
              userID
              name
              email
              description
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
              status
              owner
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
            shippingAddress {
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
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
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
  }
`;