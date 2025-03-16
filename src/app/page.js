import CategoryFilter from "./breakfast/components/CategoryFilter";
import LaunchCart from "./components/FoodCart/LaunchCart";
import { categories } from "@/src/data/categories";
export default function Home() {
  return (
    <>
      <div className="w-full max-w-[1340px] mx-auto flex justify-between items-center py-4 px-5">
        {/* <CategoryFilter categories={categories} /> */}
        <LaunchCart categories={categories}/>
      </div>
    </>
  );
}
