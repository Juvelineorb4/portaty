/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
            __typename
          }
          
          customerProduct {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
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
            __typename
          }
          aDBrand {
            id
            name
            image
            path
            abreviation
            
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      abreviation
      
      createdAt
      updatedAt
      __typename
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
            
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        brands {
          items {
            id
            aDCategoryId
            aDBrandId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        abreviation
        
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
            __typename
          }
          
          customerProduct {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
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
            __typename
          }
          aDBrand {
            id
            name
            image
            path
            abreviation
            
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      abreviation
      
      createdAt
      updatedAt
      __typename
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
            
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
            id
            aDCategoryId
            aDBrandId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        abreviation
        
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
          __typename
        }
        camera {
          primary
          secondary
          resolution
          __typename
        }
        battery {
          capacity
          duration
          usb
          __typename
        }
        __typename
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
            identityId
            owner
            createdAt
            updatedAt
            __typename
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
            __typename
          }
          brandID
          brandFields {
            name
            image
            abreviation
            __typename
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
            __typename
          }
          productFields {
            name
            images
            __typename
          }
          code
          paths
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
            __typename
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
            __typename
          }
          laptoFields {
            serial
            __typename
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
            __typename
          }
          camera {
            primary
            secondary
            resolution
            __typename
          }
          battery {
            capacity
            duration
            usb
            __typename
          }
          __typename
        }
        
        customerProduct {
          items {
            id
            customerID
            categoryID
            brandID
            productID
            code
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
            __typename
          }
          camera {
            primary
            secondary
            resolution
            __typename
          }
          battery {
            capacity
            duration
            usb
            __typename
          }
          __typename
        }
        
        customerProduct {
          items {
            id
            customerID
            categoryID
            brandID
            productID
            code
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
            __typename
          }
          camera {
            primary
            secondary
            resolution
            __typename
          }
          battery {
            capacity
            duration
            usb
            __typename
          }
          __typename
        }
        
        customerProduct {
          items {
            id
            customerID
            categoryID
            brandID
            productID
            code
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      owner
      postname
      content
      createdAt
      updatedAt
      __typename
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
        owner
        postname
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
      identityId
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
            __typename
          }
          customerShopID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOrders {
        items {
          id
          purchaseUserID
          salesUserID
          total
          items {
            nextToken
            __typename
          }
          paymentID
          payment {
            id
            paymentStripeID
            metadata
            createdAt
            updatedAt
            owner
            __typename
          }
          shippingAddress {
            country
            postal
            city
            address
            phoneNumber
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      purchaseOrders {
        items {
          id
          purchaseUserID
          salesUserID
          total
          items {
            nextToken
            __typename
          }
          paymentID
          payment {
            id
            paymentStripeID
            metadata
            createdAt
            updatedAt
            owner
            __typename
          }
          shippingAddress {
            country
            postal
            city
            address
            phoneNumber
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
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
            identityId
            owner
            createdAt
            updatedAt
            __typename
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
            __typename
          }
          brandID
          brandFields {
            name
            image
            abreviation
            __typename
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
            __typename
          }
          productFields {
            name
            images
            __typename
          }
          code
          paths
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
            __typename
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
            __typename
          }
          laptoFields {
            serial
            __typename
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
          __typename
        }
        nextToken
        __typename
      }
      shippingAddress {
        items {
          id
          customerID
          title
          country
          postal
          city
          address
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
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
        identityId
        favorites {
          items {
            id
            itemID
            customerShopID
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        salesOrders {
          items {
            id
            purchaseUserID
            salesUserID
            total
            paymentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
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
            owner
            __typename
          }
          nextToken
          __typename
        }
        products {
          items {
            id
            customerID
            categoryID
            brandID
            productID
            code
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          nextToken
          __typename
        }
        shippingAddress {
          items {
            id
            customerID
            title
            country
            postal
            city
            address
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCustomerShippingAddress = /* GraphQL */ `
  query GetCustomerShippingAddress($id: ID!) {
    getCustomerShippingAddress(id: $id) {
      id
      customerID
      title
      country
      postal
      city
      address
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCustomerShippingAddresses = /* GraphQL */ `
  query ListCustomerShippingAddresses(
    $filter: ModelCustomerShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerShippingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        title
        country
        postal
        city
        address
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const customerShippingAddressesByCustomerID = /* GraphQL */ `
  query CustomerShippingAddressesByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerShippingAddressesByCustomerID(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        title
        country
        postal
        city
        address
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFavoriteItem = /* GraphQL */ `
  query GetFavoriteItem($id: ID!) {
    getFavoriteItem(id: $id) {
      id
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
            email
            description
            identityId
            owner
            createdAt
            updatedAt
            __typename
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
            __typename
          }
          brandID
          brandFields {
            name
            image
            abreviation
            __typename
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
            __typename
          }
          productFields {
            name
            images
            __typename
          }
          code
          paths
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
            __typename
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
            __typename
          }
          laptoFields {
            serial
            __typename
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
          __typename
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            customerShopID
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      customerShopID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFavoriteItems = /* GraphQL */ `
  query ListFavoriteItems(
    $filter: ModelFavoriteItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoriteItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          status
          owner
          favoriteItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        customerShopID
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const favoriteItemsByItemID = /* GraphQL */ `
  query FavoriteItemsByItemID(
    $itemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavoriteItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoriteItemsByItemID(
      itemID: $itemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          status
          owner
          favoriteItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        customerShopID
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const favoriteItemsByCustomerShopID = /* GraphQL */ `
  query FavoriteItemsByCustomerShopID(
    $customerShopID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavoriteItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoriteItemsByCustomerShopID(
      customerShopID: $customerShopID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          status
          owner
          favoriteItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        customerShopID
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCustomerProduct = /* GraphQL */ `
  query GetCustomerProduct($id: ID!) {
    getCustomerProduct(id: $id) {
      id
      customerID
      customer {
        userID
        name
        email
        description
        identityId
        favorites {
          items {
            id
            itemID
            customerShopID
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        salesOrders {
          items {
            id
            purchaseUserID
            salesUserID
            total
            paymentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
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
            owner
            __typename
          }
          nextToken
          __typename
        }
        products {
          items {
            id
            customerID
            categoryID
            brandID
            productID
            code
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          nextToken
          __typename
        }
        shippingAddress {
          items {
            id
            customerID
            title
            country
            postal
            city
            address
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      categoryID
      categoryFields {
        name
        image
        abreviation
        __typename
      }
      brandID
      brandFields {
        name
        image
        abreviation
        __typename
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
            __typename
          }
          camera {
            primary
            secondary
            resolution
            __typename
          }
          battery {
            capacity
            duration
            usb
            __typename
          }
          __typename
        }
        
        customerProduct {
          items {
            id
            customerID
            categoryID
            brandID
            productID
            code
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      productFields {
        name
        images
        __typename
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
          customer {
            userID
            name
            email
            description
            identityId
            owner
            createdAt
            updatedAt
            __typename
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
            __typename
          }
          brandID
          brandFields {
            name
            image
            abreviation
            __typename
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
            __typename
          }
          productFields {
            name
            images
            __typename
          }
          code
          paths
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
            __typename
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
            __typename
          }
          laptoFields {
            serial
            __typename
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
          __typename
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            customerShopID
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      phoneFields {
        carrier
        imei
        model
        storage
        batery
        __typename
      }
      laptoFields {
        serial
        __typename
      }
      owner
      createdAt
      updatedAt
      customerProductStatusId
      __typename
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
        customer {
          userID
          name
          email
          description
          identityId
          favorites {
            nextToken
            __typename
          }
          salesOrders {
            nextToken
            __typename
          }
          purchaseOrders {
            nextToken
            __typename
          }
          products {
            nextToken
            __typename
          }
          shippingAddress {
            nextToken
            __typename
          }
          owner
          createdAt
          updatedAt
          __typename
        }
        categoryID
        categoryFields {
          name
          image
          abreviation
          __typename
        }
        brandID
        brandFields {
          name
          image
          abreviation
          __typename
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
            __typename
          }
          
          customerProduct {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        productFields {
          name
          images
          __typename
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
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          status
          owner
          favoriteItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        phoneFields {
          carrier
          imei
          model
          storage
          batery
          __typename
        }
        laptoFields {
          serial
          __typename
        }
        owner
        createdAt
        updatedAt
        customerProductStatusId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const customerProductsByCustomerIDAndCode = /* GraphQL */ `
  query CustomerProductsByCustomerIDAndCode(
    $customerID: ID!
    $code: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerProductsByCustomerIDAndCode(
      customerID: $customerID
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        customer {
          userID
          name
          email
          description
          identityId
          favorites {
            nextToken
            __typename
          }
          salesOrders {
            nextToken
            __typename
          }
          purchaseOrders {
            nextToken
            __typename
          }
          products {
            nextToken
            __typename
          }
          shippingAddress {
            nextToken
            __typename
          }
          owner
          createdAt
          updatedAt
          __typename
        }
        categoryID
        categoryFields {
          name
          image
          abreviation
          __typename
        }
        brandID
        brandFields {
          name
          image
          abreviation
          __typename
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
            __typename
          }
          
          customerProduct {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        productFields {
          name
          images
          __typename
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
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          status
          owner
          favoriteItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        phoneFields {
          carrier
          imei
          model
          storage
          batery
          __typename
        }
        laptoFields {
          serial
          __typename
        }
        owner
        createdAt
        updatedAt
        customerProductStatusId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const customerProductsByProductID = /* GraphQL */ `
  query CustomerProductsByProductID(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerProductsByProductID(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        customer {
          userID
          name
          email
          description
          identityId
          favorites {
            nextToken
            __typename
          }
          salesOrders {
            nextToken
            __typename
          }
          purchaseOrders {
            nextToken
            __typename
          }
          products {
            nextToken
            __typename
          }
          shippingAddress {
            nextToken
            __typename
          }
          owner
          createdAt
          updatedAt
          __typename
        }
        categoryID
        categoryFields {
          name
          image
          abreviation
          __typename
        }
        brandID
        brandFields {
          name
          image
          abreviation
          __typename
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
            __typename
          }
          
          customerProduct {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        productFields {
          name
          images
          __typename
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
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          status
          owner
          favoriteItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        phoneFields {
          carrier
          imei
          model
          storage
          batery
          __typename
        }
        laptoFields {
          serial
          __typename
        }
        owner
        createdAt
        updatedAt
        customerProductStatusId
        __typename
      }
      nextToken
      __typename
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
          identityId
          favorites {
            nextToken
            __typename
          }
          salesOrders {
            nextToken
            __typename
          }
          purchaseOrders {
            nextToken
            __typename
          }
          products {
            nextToken
            __typename
          }
          shippingAddress {
            nextToken
            __typename
          }
          owner
          createdAt
          updatedAt
          __typename
        }
        categoryID
        categoryFields {
          name
          image
          abreviation
          __typename
        }
        brandID
        brandFields {
          name
          image
          abreviation
          __typename
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
            __typename
          }
          
          customerProduct {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        productFields {
          name
          images
          __typename
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
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          status
          owner
          favoriteItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        phoneFields {
          carrier
          imei
          model
          storage
          batery
          __typename
        }
        laptoFields {
          serial
          __typename
        }
        owner
        createdAt
        updatedAt
        customerProductStatusId
        __typename
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
            __typename
          }
          customerShopID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
          customer {
            userID
            name
            email
            description
            identityId
            owner
            createdAt
            updatedAt
            __typename
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
            __typename
          }
          brandID
          brandFields {
            name
            image
            abreviation
            __typename
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
            __typename
          }
          productFields {
            name
            images
            __typename
          }
          code
          paths
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
            __typename
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
            __typename
          }
          laptoFields {
            serial
            __typename
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
          __typename
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            customerShopID
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
          id
          orderID
          itemID
          item {
            id
            productID
            status
            owner
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      paymentID
      payment {
        id
        paymentStripeID
        metadata
        createdAt
        updatedAt
        owner
        __typename
      }
      shippingAddress {
        country
        postal
        city
        address
        phoneNumber
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listOrderDetails = /* GraphQL */ `
  query ListOrderDetails(
    $filter: ModelOrderDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            __typename
          }
          nextToken
          __typename
        }
        paymentID
        payment {
          id
          paymentStripeID
          metadata
          createdAt
          updatedAt
          owner
          __typename
        }
        shippingAddress {
          country
          postal
          city
          address
          phoneNumber
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderDetailsByPurchaseUserID = /* GraphQL */ `
  query OrderDetailsByPurchaseUserID(
    $purchaseUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderDetailsByPurchaseUserID(
      purchaseUserID: $purchaseUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            __typename
          }
          nextToken
          __typename
        }
        paymentID
        payment {
          id
          paymentStripeID
          metadata
          createdAt
          updatedAt
          owner
          __typename
        }
        shippingAddress {
          country
          postal
          city
          address
          phoneNumber
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderDetailsBySalesUserID = /* GraphQL */ `
  query OrderDetailsBySalesUserID(
    $salesUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderDetailsBySalesUserID(
      salesUserID: $salesUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            __typename
          }
          nextToken
          __typename
        }
        paymentID
        payment {
          id
          paymentStripeID
          metadata
          createdAt
          updatedAt
          owner
          __typename
        }
        shippingAddress {
          country
          postal
          city
          address
          phoneNumber
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
            email
            description
            identityId
            owner
            createdAt
            updatedAt
            __typename
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
            __typename
          }
          brandID
          brandFields {
            name
            image
            abreviation
            __typename
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
            __typename
          }
          productFields {
            name
            images
            __typename
          }
          code
          paths
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
            __typename
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
            __typename
          }
          laptoFields {
            serial
            __typename
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
          __typename
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            customerShopID
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderID
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
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          status
          owner
          favoriteItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemsByOrderID = /* GraphQL */ `
  query OrderItemsByOrderID(
    $orderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByOrderID(
      orderID: $orderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderID
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
            paths
            price
            condition
            description
            owner
            createdAt
            updatedAt
            customerProductStatusId
            __typename
          }
          status
          owner
          favoriteItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPaymentStripe = /* GraphQL */ `
  query GetPaymentStripe($id: ID!) {
    getPaymentStripe(id: $id) {
      id
      paymentStripeID
      metadata
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listPaymentStripes = /* GraphQL */ `
  query ListPaymentStripes(
    $filter: ModelPaymentStripeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentStripes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        paymentStripeID
        metadata
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
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
            
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        brands {
          items {
            id
            aDCategoryId
            aDBrandId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        abreviation
        
        createdAt
        updatedAt
        __typename
      }
      aDBrand {
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
            
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
            id
            aDCategoryId
            aDBrandId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        abreviation
        
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
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
          path
          products {
            nextToken
            __typename
          }
          brands {
            nextToken
            __typename
          }
          abreviation
          
          createdAt
          updatedAt
          __typename
        }
        aDBrand {
          id
          name
          image
          path
          products {
            nextToken
            __typename
          }
          categories {
            nextToken
            __typename
          }
          abreviation
          
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
          path
          products {
            nextToken
            __typename
          }
          brands {
            nextToken
            __typename
          }
          abreviation
          
          createdAt
          updatedAt
          __typename
        }
        aDBrand {
          id
          name
          image
          path
          products {
            nextToken
            __typename
          }
          categories {
            nextToken
            __typename
          }
          abreviation
          
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
          path
          products {
            nextToken
            __typename
          }
          brands {
            nextToken
            __typename
          }
          abreviation
          
          createdAt
          updatedAt
          __typename
        }
        aDBrand {
          id
          name
          image
          path
          products {
            nextToken
            __typename
          }
          categories {
            nextToken
            __typename
          }
          abreviation
          
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
