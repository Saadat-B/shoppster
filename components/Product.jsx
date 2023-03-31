// import { Router } from "next/router";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

export const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const item = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToCart(item));
  };
  return (
    <Link
      href={`/products/${id}`}
      className="p-8 dark:bg-gray-900 flex flex-col "
    >
      <div className="group relative block overflow-hidden border dark:bg-gray-500 border-gray-100 dark:border-gray-400">
        <button className="absolute right-4 top-4 z-10 rounded-full dark:text-gray-300 bg-transparent  p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <div>
          <img
            src={image}
            alt=""
            className="py-4 h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 cursor-pointer"
          />
        </div>

        <div className="relative border-t dark:bg-gray-700 border-gray-100 dark:border-gray-400 bg-white p-6">
          <span className="whitespace-nowrap bg-indigo-500 text-white px-3 py-1.5 text-xs font-medium">
            New
          </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white truncate">
            {title}
          </h3>

          <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-200">
            ₹{Math.floor(price * 70)}
          </p>

          <form className="mt-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItemToCart();
                console.log("clicked");
              }}
              className="w-full rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </Link>
  );
};

// ProductsTwo.displayName = "ProductsTwo";
