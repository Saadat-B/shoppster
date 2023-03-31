import { SearchBar } from "./SearchBar";
import { useSession, signIn, signOut } from "next-auth/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const router = useRouter();
  return (
    <div>
      <nav className="relative px-8 py-4 flex  items-center justify-between border-y border-gray-400 dark:border-gray-700 gap-32">
        <div
          className="cursor-pointer text-3xl font-bold leading-none flex items-center space-x-4"
          onClick={() => router.push("/")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1656/1656799.png"
            alt=""
            className="w-8 h-8"
          />
          <span className="text-gray-600 dark:text-gray-300 text-xl">
            Shoppster
          </span>
        </div>

        <SearchBar />
        <div className="flex gap-10">
          {session && (
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2">
                <img
                  className="inline-block w-12 h-12 rounded-full"
                  src={session.user.image}
                  alt="John Doe"
                />
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {session.user.name}
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 cursor-pointer">
                    View Profile
                  </span>
                </span>
              </div>
            </div>
          )}
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/checkout")}
          >
            <ShoppingCartIcon className="h-10" />
            <span class="absolute right-0 top-0 rounded-full bg-indigo-600 w-5 h-5 text-white flex items-center justify-center text-sm font-bold">
              {items.length}
            </span>
          </div>
          <div className="space-x-2  lg:block">
            <button
              className="rounded-md border border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-indigo-600 hover:text-white hover:bg-indigo-600"
              onClick={session ? signOut : signIn}
            >
              {session ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

// NavbarThree.displayName = "NavbarThree";
// export default Navbar;
