import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link key={item.id} to={`/product/${item.id}`}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={
              import.meta.env.VITE_UPLOAD_URL +
              item.attributes?.image?.data?.attributes?.url
            }
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h2 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {item?.attributes.title}
            </h2>
          </div>
          <p className="text-sm font-medium text-gray-900">
            ${item?.attributes.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
