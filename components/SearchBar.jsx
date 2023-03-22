import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const SearchBar = () => {
  return (
    <div className="hidden sm:flex flex-grow items-center space-x-2 ">
      <input
        className="flex flex-grow  h-10 rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type="email"
        placeholder="Search Shoppster..."
      />
      <button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4 flex-grow-0">
        <MagnifyingGlassIcon className="h-5 mr-2" /> Search
      </button>
    </div>
  );
};

// InputWithButton.displayName = "InputWithButton";

// export default SearchBar;
