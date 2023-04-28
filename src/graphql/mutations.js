/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createADCategory = /* GraphQL */ `
  mutation CreateADCategory(
    $input: CreateADCategoryInput!
    $condition: ModelADCategoryConditionInput
  ) {
    createADCategory(input: $input, condition: $condition) {
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
  }
`;
export const updateADCategory = /* GraphQL */ `
  mutation UpdateADCategory(
    $input: UpdateADCategoryInput!
    $condition: ModelADCategoryConditionInput
  ) {
    updateADCategory(input: $input, condition: $condition) {
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
  }
`;
export const deleteADCategory = /* GraphQL */ `
  mutation DeleteADCategory(
    $input: DeleteADCategoryInput!
    $condition: ModelADCategoryConditionInput
  ) {
    deleteADCategory(input: $input, condition: $condition) {
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
  }
`;
export const createADBrand = /* GraphQL */ `
  mutation CreateADBrand(
    $input: CreateADBrandInput!
    $condition: ModelADBrandConditionInput
  ) {
    createADBrand(input: $input, condition: $condition) {
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
  }
`;
export const updateADBrand = /* GraphQL */ `
  mutation UpdateADBrand(
    $input: UpdateADBrandInput!
    $condition: ModelADBrandConditionInput
  ) {
    updateADBrand(input: $input, condition: $condition) {
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
  }
`;
export const deleteADBrand = /* GraphQL */ `
  mutation DeleteADBrand(
    $input: DeleteADBrandInput!
    $condition: ModelADBrandConditionInput
  ) {
    deleteADBrand(input: $input, condition: $condition) {
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
  }
`;
export const createADProduct = /* GraphQL */ `
  mutation CreateADProduct(
    $input: CreateADProductInput!
    $condition: ModelADProductConditionInput
  ) {
    createADProduct(input: $input, condition: $condition) {
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
export const updateADProduct = /* GraphQL */ `
  mutation UpdateADProduct(
    $input: UpdateADProductInput!
    $condition: ModelADProductConditionInput
  ) {
    updateADProduct(input: $input, condition: $condition) {
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
export const deleteADProduct = /* GraphQL */ `
  mutation DeleteADProduct(
    $input: DeleteADProductInput!
    $condition: ModelADProductConditionInput
  ) {
    deleteADProduct(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createCustomerShop = /* GraphQL */ `
  mutation CreateCustomerShop(
    $input: CreateCustomerShopInput!
    $condition: ModelCustomerShopConditionInput
  ) {
    createCustomerShop(input: $input, condition: $condition) {
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
  }
`;
export const updateCustomerShop = /* GraphQL */ `
  mutation UpdateCustomerShop(
    $input: UpdateCustomerShopInput!
    $condition: ModelCustomerShopConditionInput
  ) {
    updateCustomerShop(input: $input, condition: $condition) {
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
  }
`;
export const deleteCustomerShop = /* GraphQL */ `
  mutation DeleteCustomerShop(
    $input: DeleteCustomerShopInput!
    $condition: ModelCustomerShopConditionInput
  ) {
    deleteCustomerShop(input: $input, condition: $condition) {
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
  }
`;
export const createCustomerProduct = /* GraphQL */ `
  mutation CreateCustomerProduct(
    $input: CreateCustomerProductInput!
    $condition: ModelCustomerProductConditionInput
  ) {
    createCustomerProduct(input: $input, condition: $condition) {
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
  }
`;
export const deleteCustomerProduct = /* GraphQL */ `
  mutation DeleteCustomerProduct(
    $input: DeleteCustomerProductInput!
    $condition: ModelCustomerProductConditionInput
  ) {
    deleteCustomerProduct(input: $input, condition: $condition) {
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
  }
`;
export const updateCustomerProductStatus = /* GraphQL */ `
  mutation UpdateCustomerProductStatus(
    $input: UpdateCustomerProductStatusInput!
    $condition: ModelCustomerProductStatusConditionInput
  ) {
    updateCustomerProductStatus(input: $input, condition: $condition) {
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
  }
`;
export const deleteCustomerProductStatus = /* GraphQL */ `
  mutation DeleteCustomerProductStatus(
    $input: DeleteCustomerProductStatusInput!
    $condition: ModelCustomerProductStatusConditionInput
  ) {
    deleteCustomerProductStatus(input: $input, condition: $condition) {
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
  }
`;
export const createCategoryBrands = /* GraphQL */ `
  mutation CreateCategoryBrands(
    $input: CreateCategoryBrandsInput!
    $condition: ModelCategoryBrandsConditionInput
  ) {
    createCategoryBrands(input: $input, condition: $condition) {
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
  }
`;
export const updateCategoryBrands = /* GraphQL */ `
  mutation UpdateCategoryBrands(
    $input: UpdateCategoryBrandsInput!
    $condition: ModelCategoryBrandsConditionInput
  ) {
    updateCategoryBrands(input: $input, condition: $condition) {
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
  }
`;
export const deleteCategoryBrands = /* GraphQL */ `
  mutation DeleteCategoryBrands(
    $input: DeleteCategoryBrandsInput!
    $condition: ModelCategoryBrandsConditionInput
  ) {
    deleteCategoryBrands(input: $input, condition: $condition) {
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
  }
`;
