import React from "react";
import ProductCard from "./ProductCard";

const BreakfastMenu = ({ products, selectedCategory }) => {
    // Seçilmiş category-ə uyğun yeməkləri filter edirik
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.categoryId === selectedCategory)
        : products;

    return (
        <div className="flex flex-wrap gap-6 p-6">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p className="text-gray-500">Bu kateqoriyada məhsul yoxdur.</p>
            )}
        </div>
    );
};

export default BreakfastMenu;
