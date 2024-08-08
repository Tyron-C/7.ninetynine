import PropTypes from "prop-types";
import Card from "./Card.jsx";

export default function ProductGrid({ products, loading, error }) {
  return (
    <section aria-labelledby="products-heading" className="pb-24 pt-6">
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <div className="mx-auto max-w-2xl px-4 py-9 sm:px-6 sm:py-12 lg:py-2 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {loading && <p>Loading...</p>}
              {error && <p>Error loading products</p>}
              {products && products.length > 0
                ? products.map((item) => <Card item={item} key={item.id} />)
                : !loading && <p>No products found</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
