import categoryFoodProduct_1_1 from "../data/image/categoryfood/pizza.jpg";
import categoryFoodProduct_1_2 from "../data/image/categoryfood/pizza.jpg";
import categoryFoodProduct_1_3 from "../data/image/categoryfood/pizza.jpg";
// import categoryFoodProduct_1_4 from "../data/image/categoryfood/pizza.jpg";
// import categoryFoodProduct_1_5 from "../data/image/categoryfood/pizza.jpg";
// import categoryFoodProduct_1_6 from "../data/image/categoryfood/pizza.jpg";
// import categoryFoodProduct_1_7 from "../data/image/categoryfood/pizza.jpg";
// import categoryFoodProduct_1_8 from "../data/image/categoryfood/pizza.jpg";
// import categoryFoodProduct_1_9 from "../data/image/categoryfood/pizza.jpg";

export const breakfast = {
  categories: [
    { id: 1, name: "Omletler", image: categoryFoodProduct_1_1 },
    { id: 2, name: "Sendviçlər", image: categoryFoodProduct_1_2 },
    { id: 3, name: "Süd və Taxıllar", image: categoryFoodProduct_1_3 },
  ],
  products: [
    { id: 1, name: "Pendirli Omlet", categoryId: 1, price: 5.00, weight: 200, image: "/images/omlet1.jpg" },
    { id: 2, name: "Bal və Kərə Yağı ilə Pancake", categoryId: 3, price: 6.50, weight: 250, image: "/images/pancake.jpg" },
    { id: 3, name: "Səhər Sendviçi", categoryId: 2, price: 4.00, weight: 180, image: "/images/sandwich1.jpg" }
  ]
};
