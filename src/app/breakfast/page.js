"use client";
import React, { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import { breakfast } from "@/src/data/breakfast";
import BreakfastMenu from "./components/BreakfastMenu";

const Page = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className="w-full max-w-[1340px] mx-auto py-4 px-5">
            <CategoryFilter
                breakfastCategory={breakfast.categories}
                setSelectedCategory={setSelectedCategory}
            />
            <BreakfastMenu products={breakfast.products} selectedCategory={selectedCategory} />
        </div>
    );
};

export default Page;
