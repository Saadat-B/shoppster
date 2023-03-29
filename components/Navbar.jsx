import { SearchBar } from "./SearchBar";
import { useSession, signIn, signOut } from "next-auth/react";
export const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div>
      <nav className="relative px-8 py-4 flex  items-center justify-between border-y border-gray-400 dark:border-gray-700 gap-32">
        <a
          className="text-3xl font-bold leading-none flex items-center space-x-4"
          href="#"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1656/1656799.png"
            alt=""
            className="w-8 h-8"
          />
          <span className="text-gray-600 dark:text-gray-300 text-xl">
            Shoppster
          </span>
        </a>

        <SearchBar />

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
        <div className="space-x-2  lg:block">
          <button
            className="rounded-md border border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-indigo-600 hover:text-white hover:bg-indigo-600"
            onClick={session ? signOut : signIn}
          >
            {session ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </div>
  );
};

// NavbarThree.displayName = "NavbarThree";
// export default Navbar;
