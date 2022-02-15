const data = {
  succeeded: true,
  message: null,
  errors: null,

  data: {
    category: [
      {
        id: "cate1",
        name: "Bakery",
        image: "",
        product: [
          {
            id: "pro1",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro2",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro3",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
          {
            id: "pro4",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro5",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro6",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
        ],
      },
      {
        id: "cate2",
        name: "Fruit and vegetables",
        image: "",
        product: [
          {
            id: "pro1",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro2",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro3",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
          {
            id: "pro4",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro5",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro6",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
        ],
      },
      {
        id: "cate3",
        name: "Meat and fish",
        image:
          "https://media.istockphoto.com/photos/different-types-of-animal-protein-picture-id1165495226?b=1&k=20&m=1165495226&s=170667a&w=0&h=GnrkAstYKTYcgmTgc0Ym219Wt9mYTpf6dIYVBFIOdU0=",
        product: [
          {
            id: "pro1",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro2",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro3",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
          {
            id: "pro4",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro5",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro6",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
        ],
      },
      {
        id: "cate4",
        name: "Drinks",
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "For Her",
        product: [
          {
            id: "pro1",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro2",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro3",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
          {
            id: "pro4",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro5",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro6",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
        ],
      },
      {
        id: "cate5",
        name: "Kitchen",
        image:
          "https://media.istockphoto.com/photos/two-pendant-lights-hang-over-kitchen-island-picture-id1272358382?b=1&k=20&m=1272358382&s=170667a&w=0&h=b_z0yvPvGoyQy0PkhDw-MLFM-k9x35_EVFiijjGwGXs=",
        product: [
          {
            id: "pro1",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro2",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro3",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
          {
            id: "pro4",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro5",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro6",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
        ],
      },
      {
        id: "cate6",
        name: "Special nutrition",
        image:
          "https://media.istockphoto.com/photos/healthy-food-in-heart-diet-concept-with-stethoscope-picture-id1030756658?b=1&k=20&m=1030756658&s=170667a&w=0&h=3c3DLDkAJF4A5FACYYyXNq7Rkh7A5O6WeQqsbY8UGO0=",
        product: [
          {
            id: "pro1",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro2",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro3",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
          {
            id: "pro4",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro5",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro6",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
        ],
      },
      {
        id: "cate7",
        name: "Baby",
        image:
          "https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        product: [
          {
            id: "pro1",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro2",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro3",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
          {
            id: "pro4",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro5",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro6",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
        ],
      },
      {
        id: "cate8",
        name: "Pharmacy",
        image:
          "https://media.istockphoto.com/photos/smiling-young-female-worker-in-pharmacy-wearing-labcoat-checking-picture-id1302606649?b=1&k=20&m=1302606649&s=170667a&w=0&h=QuLJYxKj6xqyf9Pe7KZ_s6PorH_ml9TYigOUTquT6lU=",
        product: [
          {
            id: "pro1",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro2",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro3",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
          {
            id: "pro4",
            idCate: "cate1",
            title: "Product title",
            description: "Space for a small product description",
            price: "1.48",
            image:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro5",
            idCate: "cate1",
            title: "Product title 2",
            description: "Space for a small product description 2",
            price: "1.00",
            image:
              "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "0",
          },
          {
            id: "pro6",
            idCate: "cate1",
            title: "Product title 3",
            description: "Space for a small product description 3",
            price: "1.36",
            image:
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            discount: "50",
          },
        ],
      },
    ],
    banner: [
      {
        id: "banner1",
        children: [
          {
            id: "bncate1",
            idBanner: "banner1",
            title: "Banner cate 1",
            link: "",
            description: "",
            image:
              "https://cdn.ssstutter.com/wp-content/uploads/2021/07/1800X700-18-scaled.jpg",
          },
          {
            id: "bncate2",
            idBanner: "banner1",
            title: "Banner cate 2",
            link: "",
            description: "",
            image:
              "https://cdn.ssstutter.com/wp-content/uploads/2021/07/1800X700-18-scaled.jpg",
          },
        ],
      },
    ],
    tagProducts: [
      {
        id: "tag1",
        name: "Beans",
        link: "",
      },
      {
        id: "tag2",
        name: "Carrots",
        link: "",
      },
      {
        id: "tag3",
        name: "Apples",
        link: "",
      },
      {
        id: "tag4",
        name: "Garlic",
        link: "",
      },
      {
        id: "tag5",
        name: "Mushrooms",
        link: "",
      },
      {
        id: "tag6",
        name: "Tomatoes",
        link: "",
      },
      {
        id: "tag7",
        name: "Chilli peppers",
        link: "",
      },
      {
        id: "tag8",
        name: "Broccoli",
        link: "",
      },
      {
        id: "tag9",
        name: "Watermelons",
        link: "",
      },
      {
        id: "tag10",
        name: "Oranges",
        link: "",
      },
      {
        id: "tag11",
        name: "Bananas",
        link: "",
      },
      {
        id: "tag12",
        name: "Grapes",
        link: "",
      },
      {
        id: "tag13",
        name: "Cherries",
        link: "",
      },
      {
        id: "tag14",
        name: "Meat",
        link: "",
      },
      {
        id: "tag15",
        name: "Seo tag",
        link: "",
      },
      {
        id: "tag16",
        name: "Fish",
        link: "",
      },
      {
        id: "tag17",
        name: "Fresh food",
        link: "",
      },
      {
        id: "tag18",
        name: "Lemons",
        link: "",
      },
    ],
    product: [
      {
        id: "pro1",
        idCate: "",
        title: "Product title",
        description: "Space for a small product description",
        price: "1.48",
        image:
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "36",
      },
      {
        id: "pro2",
        idCate: "",
        title: "Product title 2",
        description: "Space for a small product description 2",
        price: "1.00",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "0",
      },
      {
        id: "pro3",
        idCate: "",
        title: "Product title 3",
        description: "Space for a small product description 3",
        price: "1.36",
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "0",
      },
      {
        id: "pro4",
        idCate: "",
        title: "Product title",
        description: "Space for a small product description",
        price: "1.48",
        image:
          "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "36",
      },
      {
        id: "pro5",
        idCate: "",
        title: "Product title 2",
        description: "Space for a small product description 2",
        price: "1.00",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "40",
      },
      {
        id: "pro6",
        idCate: "",
        title: "Product title 3",
        description: "Space for a small product description 3",
        price: "1.36",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "50",
      },
      {
        id: "pro7",
        idCate: "",
        title: "Product title",
        description: "Space for a small product description",
        price: "1.48",
        image:
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "36",
      },
      {
        id: "pro8",
        idCate: "",
        title: "Product title 2",
        description: "Space for a small product description 2",
        price: "1.00",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "0",
      },
      {
        id: "pro9",
        idCate: "",
        title: "Product title 3",
        description: "Space for a small product description 3",
        price: "1.36",
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "0",
      },
      {
        id: "pro10",
        idCate: "",
        title: "Product title",
        description: "Space for a small product description",
        price: "1.48",
        image:
          "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "36",
      },
      {
        id: "pro11",
        idCate: "",
        title: "Product title 2",
        description: "Space for a small product description 2",
        price: "1.00",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "40",
      },
      {
        id: "pro12",
        idCate: "",
        title: "Product title 3",
        description: "Space for a small product description 3",
        price: "1.36",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "50",
      },
      {
        id: "pro13",
        idCate: "",
        title: "Product title",
        description: "Space for a small product description",
        price: "1.48",
        image:
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "36",
      },
      {
        id: "pro14",
        idCate: "",
        title: "Product title 2",
        description: "Space for a small product description 2",
        price: "1.00",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "0",
      },
      {
        id: "pro15",
        idCate: "",
        title: "Product title 3",
        description: "Space for a small product description 3",
        price: "1.36",
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "0",
      },
      {
        id: "pro16",
        idCate: "",
        title: "Product title",
        description: "Space for a small product description",
        price: "1.48",
        image:
          "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "36",
      },
      {
        id: "pro17",
        idCate: "",
        title: "Product title 2",
        description: "Space for a small product description 2",
        price: "1.00",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "40",
      },
      {
        id: "pro18",
        idCate: "",
        title: "Product title 3",
        description: "Space for a small product description 3",
        price: "1.36",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "50",
      },
      {
        id: "pro19",
        idCate: "",
        title: "Product title",
        description: "Space for a small product description",
        price: "1.48",
        image:
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "36",
      },
      {
        id: "pro20",
        idCate: "",
        title: "Product title 2",
        description: "Space for a small product description 2",
        price: "1.00",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "0",
      },
      {
        id: "pro21",
        idCate: "",
        title: "Product title 3",
        description: "Space for a small product description 3",
        price: "1.36",
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "0",
      },
      {
        id: "pro22",
        idCate: "",
        title: "Product title",
        description: "Space for a small product description",
        price: "1.48",
        image:
          "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "36",
      },
      {
        id: "pro23",
        idCate: "",
        title: "Product title 2",
        description: "Space for a small product description 2",
        price: "1.00",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "40",
      },
      {
        id: "pro24",
        idCate: "",
        title: "Product title 3",
        description: "Space for a small product description 3",
        price: "1.36",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        discount: "50",
      },
    ],
    blog: [
      {
        id: "blog25",
        title:
          "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here.",
        author: "Name and Surname",
        imgAuthor:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: "blog26",
        title:
          "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here.",
        author: "Name and Surname",
        imgAuthor:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: "blog27",
        title:
          "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here.",
        author: "Name and Surname",
        imgAuthor:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: "blog28",
        title:
          "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here.",
        author: "Name and Surname",
        imgAuthor:
          "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=",
      },
      {
        id: "blog29",
        title:
          "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here.",
        author: "Name and Surname",
        imgAuthor:
          "https://media.istockphoto.com/photos/african-mid-woman-using-smartphone-at-home-picture-id1319763415?b=1&k=20&m=1319763415&s=170667a&w=0&h=J9vN7w33elL-hY1CogyTB2BzzKpiEbmPqTdsQ6fBbuI=",
      },
    ],
  },
};

export default data;
