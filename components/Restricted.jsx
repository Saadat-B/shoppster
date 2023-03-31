import { LockClosedIcon } from "@heroicons/react/24/outline";

export const Restricted = () => {
  return (
    <div className="pb-40 h-screen flex items-center justify-center bg-gradient-to-r from-white to-gray-400">
      <div className="text-center ">
        {/* <p className="text-base font-semibold text-indigo-600">404</p> */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
          Access to this page is restricted
        </h1>
        <p className="mt-6 text-base leading-7 ext-gray-900 dark:text-gray-200 ">
          Please check with the site admin if you believe this is a mistake.
        </p>
        {/* <div className="flex items-center justify-center mt-6 gap-x-3">
          <button className="inline-flex items-center rounded-md border border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-black dark:text-white">
            <LockClosedIcon className="w-4 h-4 mr-2" />
            Take me Back
          </button>

          <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
            Go Home
          </button>
        </div> */}
      </div>
    </div>
  );
};

// ErrorPageFour.displayName = "ErrorPageFour";
