/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getADCategory = /* GraphQL */ `
  query GetADCategory($id: ID!) {
    getADCategory(id: $id) {
      id
      name
      image
      products {
        items {
          id
          name
          images
          suggestedPrice
          categoryID
          brandID
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
            products {
              nextToken
            }
            brands {
              nextToken
            }
            createdAt
            updatedAt
          }
          aDBrand {
            id
            name
            image
            products {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
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
        products {
          items {
            id
            name
            images
            suggestedPrice
            categoryID
            brandID
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
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
export const getADBrand = /* GraphQL */ `
  query GetADBrand($id: ID!) {
    getADBrand(id: $id) {
      id
      name
      image
      products {
        items {
          id
          name
          images
          suggestedPrice
          categoryID
          brandID
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
            products {
              nextToken
            }
            brands {
              nextToken
            }
            createdAt
            updatedAt
          }
          aDBrand {
            id
            name
            image
            products {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
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
            suggestedPrice
            categoryID
            brandID
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
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
export const getADProduct = /* GraphQL */ `
  query GetADProduct($id: ID!) {
    getADProduct(id: $id) {
      id
      name
      images
      suggestedPrice
      categoryID
      brandID
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
        suggestedPrice
        categoryID
        brandID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aDProductsByCategoryIDAndName = /* GraphQL */ `
  query ADProductsByCategoryIDAndName(
    $categoryID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelADProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aDProductsByCategoryIDAndName(
      categoryID: $categoryID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        images
        suggestedPrice
        categoryID
        brandID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aDProductsByBrandIDAndName = /* GraphQL */ `
  query ADProductsByBrandIDAndName(
    $brandID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelADProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aDProductsByBrandIDAndName(
      brandID: $brandID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        images
        suggestedPrice
        categoryID
        brandID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
          category
          brand
          productID
          price
          images
          condition
          description
          code
          status {
            id
            productID
            product {
              id
              customerID
              category
              brand
              productID
              price
              images
              condition
              description
              code
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
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
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listCustomerShops = /* GraphQL */ `
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
        description
        products {
          items {
            id
            customerID
            category
            brand
            productID
            price
            images
            condition
            description
            code
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
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomerProduct = /* GraphQL */ `
  query GetCustomerProduct($id: ID!) {
    getCustomerProduct(id: $id) {
      id
      customerID
      category
      brand
      productID
      price
      images
      condition
      description
      code
      status {
        id
        productID
        product {
          id
          customerID
          category
          brand
          productID
          price
          images
          condition
          description
          code
          status {
            id
            productID
            product {
              id
              customerID
              category
              brand
              productID
              price
              images
              condition
              description
              code
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
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
  }
`;
export const listCustomerProducts = /* GraphQL */ `
  query ListCustomerProducts(
    $filter: ModelCustomerProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        category
        brand
        productID
        price
        images
        condition
        description
        code
        status {
          id
          productID
          product {
            id
            customerID
            category
            brand
            productID
            price
            images
            condition
            description
            code
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
  }
`;
export const customerProductsByCustomerID = /* GraphQL */ `
  query CustomerProductsByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerProductsByCustomerID(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        category
        brand
        productID
        price
        images
        condition
        description
        code
        status {
          id
          productID
          product {
            id
            customerID
            category
            brand
            productID
            price
            images
            condition
            description
            code
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
        category
        brand
        productID
        price
        images
        condition
        description
        code
        status {
          id
          productID
          product {
            id
            customerID
            category
            brand
            productID
            price
            images
            condition
            description
            code
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
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listCustomerProductStatuses = /* GraphQL */ `
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
          category
          brand
          productID
          price
          images
          condition
          description
          code
          status {
            id
            productID
            product {
              id
              customerID
              category
              brand
              productID
              price
              images
              condition
              description
              code
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
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
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategoryBrands = /* GraphQL */ `
  query GetCategoryBrands($id: ID!) {
    getCategoryBrands(id: $id) {
      id
      aDCategoryId
      aDBrandId
      aDCategory {
        id
        name
        image
        products {
          items {
            id
            name
            images
            suggestedPrice
            categoryID
            brandID
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
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      aDBrand {
        id
        name
        image
        products {
          items {
            id
            name
            images
            suggestedPrice
            categoryID
            brandID
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
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategoryBrands = /* GraphQL */ `
  query ListCategoryBrands(
    $filter: ModelCategoryBrandsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aDCategoryId
        aDBrandId
        aDCategory {
          id
          name
          image
          products {
            items {
              id
              name
              images
              suggestedPrice
              categoryID
              brandID
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        aDBrand {
          id
          name
          image
          products {
            items {
              id
              name
              images
              suggestedPrice
              categoryID
              brandID
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const categoryBrandsByADCategoryId = /* GraphQL */ `
  query CategoryBrandsByADCategoryId(
    $aDCategoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryBrandsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoryBrandsByADCategoryId(
      aDCategoryId: $aDCategoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aDCategoryId
        aDBrandId
        aDCategory {
          id
          name
          image
          products {
            items {
              id
              name
              images
              suggestedPrice
              categoryID
              brandID
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        aDBrand {
          id
          name
          image
          products {
            items {
              id
              name
              images
              suggestedPrice
              categoryID
              brandID
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const categoryBrandsByADBrandId = /* GraphQL */ `
  query CategoryBrandsByADBrandId(
    $aDBrandId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryBrandsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoryBrandsByADBrandId(
      aDBrandId: $aDBrandId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aDCategoryId
        aDBrandId
        aDCategory {
          id
          name
          image
          products {
            items {
              id
              name
              images
              suggestedPrice
              categoryID
              brandID
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        aDBrand {
          id
          name
          image
          products {
            items {
              id
              name
              images
              suggestedPrice
              categoryID
              brandID
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
