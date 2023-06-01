export const getADCategory = /* GraphQL */ `
  query GetADCategory($id: ID!) {
    getADCategory(id: $id) {
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
          customerProduct {
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
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
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
            products {
              nextToken
            }
            brands {
              nextToken
            }
            abreviation
            createdAt
            updatedAt
          }
          aDBrand {
            id
            name
            image
            path
            products {
              nextToken
            }
            categories {
              nextToken
            }
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
  }
`;
export const listADCategories = /* GraphQL */ `
  query ListADCategories(
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
export const getADBrand = /* GraphQL */ `
  query GetADBrand($id: ID!) {
    getADBrand(id: $id) {
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
          customerProduct {
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
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          id
          aDCategoryId
          aDBrandId
          aDCategory {
            id
            name
            image
            path
            products {
              nextToken
            }
            brands {
              nextToken
            }
            abreviation
            createdAt
            updatedAt
          }
          aDBrand {
            id
            name
            image
            path
            products {
              nextToken
            }
            categories {
              nextToken
            }
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
        categories {
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
export const getADProduct = /* GraphQL */ `
  query GetADProduct($id: ID!) {
    getADProduct(id: $id) {
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
      customerProduct {
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
            }
            customerProduct {
              nextToken
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
      createdAt
      updatedAt
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
        customerProduct {
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
        createdAt
        updatedAt
      }
      nextToken
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
          email
          description
          salesOrders {
            items {
              id
              purchaseUserID
              salesUserID
              total
              paymentID
              createdAt
              updatedAt
            }
            nextToken
          }
          purchaseOrders {
            items {
              id
              purchaseUserID
              salesUserID
              total
              paymentID
              createdAt
              updatedAt
            }
            nextToken
          }
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
          customerProduct {
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
// obtener detalles de una orden pagada
export const getOrderDetailPreview = /* GraphQL */ `
  query GetOrderDetail($id: ID!) {
    getOrderDetail(id: $id) {
      id
      purchaseUserID
      salesUserID
      total
      paymentID
      shippingAddress {
        country
        postal
        city
        address
        phoneNumber
      }
      # items son los productos que se vendieron con la orden
      items {
        items{
          # resultado ya que items puede ser un arreglo de OrderItem
          id
          # como se esta en orderItem tiene un campo llamado item que es el producto vendido
          item{
            # cese item es de tipo CustomerProductStatus
            id 
            # producto seria el producto que maneja el customerProductStatus
            product{
              id 
              price
              code
              paths
              customer {
                name
                identityId
              }
              # dicho producto es un customerProduct
              adproduct{ 
                # adproduct es el campo que guarda el producto de tipo ADProducto
                id 
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
      id
      orderID
      itemID
      item{
        id
      }
    }
  }
`;

export const getCustomerProductStatusPrueba = /* GraphQL */ `
  query GetCustomerProductStatus($id: ID!) {
    getCustomerProductStatus(id: $id) {
      id
      productID
      status
    }
  }
`;

