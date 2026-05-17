const MOCK_MENU_DATA = {
  statusCode: 0,
  data: {
    cards: [
      { card: { card: {} } },
      { card: { card: {} } },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              name: "Spice Garden",
              cuisines: ["North Indian", "Chinese", "Biryani"],
              avgRating: 4.3,
              costForTwoMessage: "₹300 for two",
              sla: { deliveryTime: 30, slaString: "30 MINS" },
            },
          },
        },
      },
      { card: { card: {} } },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                { card: { card: {} } },
                {
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        { card: { info: { id: "1", isVeg: 1, emoji: "🧆", name: "Paneer Butter Masala", description: "Rich creamy paneer curry with tomato gravy.", price: 28000, ratings: { aggregatedRating: { rating: "4.3" } } } } },
                        { card: { info: { id: "2", isVeg: 1, emoji: "🍲", name: "Dal Tadka", description: "Yellow lentils tempered with spices and ghee.", price: 18000, ratings: { aggregatedRating: { rating: "4.1" } } } } },
                        { card: { info: { id: "3", isVeg: 1, emoji: "🍚", name: "Veg Fried Rice", description: "Wok tossed rice with fresh veggies.", price: 19000, ratings: { aggregatedRating: { rating: "4.2" } } } } },
                        { card: { info: { id: "4", isVeg: 0, emoji: "🍗", name: "Butter Chicken", description: "Creamy tomato-based curry with tender chicken.", price: 32000, ratings: { aggregatedRating: { rating: "4.5" } } } } },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Biryani",
                      itemCards: [
                        { card: { info: { id: "5", isVeg: 0, emoji: "🍖", name: "Chicken Biryani", description: "Fragrant basmati rice with succulent chicken.", price: 27900, ratings: { aggregatedRating: { rating: "4.5" } } } } },
                        { card: { info: { id: "6", isVeg: 1, emoji: "🍛", name: "Veg Biryani", description: "Aromatic rice cooked with fresh vegetables.", price: 21900, ratings: { aggregatedRating: { rating: "4.2" } } } } },
                        { card: { info: { id: "7", isVeg: 0, emoji: "🥩", name: "Mutton Biryani", description: "Slow-cooked mutton with saffron rice.", price: 34900, ratings: { aggregatedRating: { rating: "4.6" } } } } },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Starters",
                      itemCards: [
                        { card: { info: { id: "8", isVeg: 1, emoji: "🧀", name: "Paneer Tikka", description: "Grilled cottage cheese marinated in spices.", price: 24900, ratings: { aggregatedRating: { rating: "4.4" } } } } },
                        { card: { info: { id: "9", isVeg: 0, emoji: "🍗", name: "Chicken 65", description: "Crispy deep-fried spiced chicken.", price: 22900, ratings: { aggregatedRating: { rating: "4.5" } } } } },
                        { card: { info: { id: "10", isVeg: 1, emoji: "🥢", name: "Veg Spring Rolls", description: "Crispy rolls filled with seasoned vegetables.", price: 16900, ratings: { aggregatedRating: { rating: "4.0" } } } } },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Breads",
                      itemCards: [
                        { card: { info: { id: "11", isVeg: 1, emoji: "🫓", name: "Butter Naan", description: "Soft leavened bread brushed with butter.", price: 5900, ratings: { aggregatedRating: { rating: "4.4" } } } } },
                        { card: { info: { id: "12", isVeg: 1, emoji: "🫓", name: "Garlic Naan", description: "Naan topped with garlic and fresh herbs.", price: 6900, ratings: { aggregatedRating: { rating: "4.5" } } } } },
                        { card: { info: { id: "13", isVeg: 1, emoji: "🫓", name: "Tandoori Roti", description: "Whole wheat roti from the tandoor.", price: 3900, ratings: { aggregatedRating: { rating: "4.0" } } } } },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Desserts",
                      itemCards: [
                        { card: { info: { id: "14", isVeg: 1, emoji: "🍮", name: "Gulab Jamun", description: "Soft milk dumplings soaked in sugar syrup.", price: 9900, ratings: { aggregatedRating: { rating: "4.6" } } } } },
                        { card: { info: { id: "15", isVeg: 1, emoji: "🍦", name: "Kulfi", description: "Traditional Indian ice cream with pistachio.", price: 11900, ratings: { aggregatedRating: { rating: "4.5" } } } } },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};

export default MOCK_MENU_DATA;