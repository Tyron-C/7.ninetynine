import { Dialog } from "@headlessui/react";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import FilterDialog from "../../components/FilterDialog.jsx";
import ProductGrid from "../../components/ProductGrid.jsx";
import SortMenu from "../../components/SortMenu";
import useFetch from "../../hooks/useFetch";

const SortOptions = [
  { name: "Precio: De menor a mayor", sortBy: "priceAsc", current: true },
  { name: "Precio: de mayor a menor", sortBy: "priceDesc" },
];

export default function Home() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState("priceAsc");
  const { data: products, loading, error } = useFetch(`/products?populate=*`);

  const handleSortChange = (sortBy) => {
    setSortOption(sortBy);
  };

  const getSortedProducts = () => {
    if (!products) return [];
    return [...products].sort((a, b) => {
      const priceA = a.attributes.price;
      const priceB = b.attributes.price;

      if (sortOption === "priceAsc") {
        return priceA - priceB;
      } else if (sortOption === "priceDesc") {
        return priceB - priceA;
      }
      return 0;
    });
  };

  const sortedProducts = getSortedProducts();

  return (
    <div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <header className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Tienda
          </h1>
          <div className="flex items-center">
            <SortMenu options={SortOptions} onChange={handleSortChange} />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </header>
        <ProductGrid
          products={sortedProducts}
          loading={loading}
          error={error}
        />
      </main>
    </div>
  );
}
