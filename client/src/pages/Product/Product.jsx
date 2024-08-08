"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import { addToCart } from "../../redux/cartReducer.js";

export default function Product() {
  const id = useParams().id;
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || !data.attributes) {
    return <div>No data available</div>;
  }

  const { attributes } = data;

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={
                import.meta.env.VITE_UPLOAD_URL +
                attributes.image?.data?.attributes?.url
              }
              className="h-full w-full object-cover object-center"
              alt={attributes.title}
            />
          </div>
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={
                import.meta.env.VITE_UPLOAD_URL +
                attributes.image2?.data?.attributes?.url
              }
              className="h-full w-full object-cover object-center"
              alt={attributes.title}
            />
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={
                import.meta.env.VITE_UPLOAD_URL +
                attributes.image3?.data?.attributes?.url
              }
              className="h-full w-full object-cover object-center"
              alt={attributes.title}
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {attributes.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0 text-lg font-bold">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-[#2879fe]">
              ${attributes.price}
            </p>
            <div className="flex items-center gap-[10px] mt-5">
              <button
                className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer bg-gray-300 rounded-md font-light"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button
                className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer bg-gray-300 rounded-md font-light"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <div className="mt-10">
              <button
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      description: data.attributes.description,
                      price: data.attributes.price,
                      image: data.attributes.image.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                Añadir a la cesta
              </button>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {attributes.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
