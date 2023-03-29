import { useEffect, useState } from "react";

const admin = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    let timer;
    if (formSubmitted) {
      timer = setTimeout(() => {
        // setFormSubmitting(false);
        setFormSubmitted(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [formSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    const response = await fetch("/api/product/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, price, description, category, image }),
    });
    if (response.ok) {
      console.log("Form submitted successfully!");

      setId("");
      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
      setImage("");
      setFormSubmitted(true);
      setFormSubmitting(false);
    } else {
      console.error("Form submission failed.");
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 p-1">
      <div className="flex items-center justify-center my-4">
        <div className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 p-3 drop-shadow-lg rounded-md">
          <div className="flex items-center justify-center px-4 py-4 bg-white sm:px-6 lg:px-4 sm:py-4 lg:py-4 lg:w-[500px]">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Add Product
              </h2>
              <p className=" text-base text-gray-600">
                <a
                  href="/"
                  title=""
                  className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
                >
                  Shoppster
                </a>
              </p>

              <form onSubmit={handleSubmit} className="mt-2">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="id"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      ID{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="number"
                        placeholder="Enter ID"
                        id="id"
                        name="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="title"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Title{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Enter title"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Price{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="number"
                        placeholder="Enter price"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Description{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Enter description"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Category{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Enter category"
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="image"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Image{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Enter image url"
                        id="image"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div>
                    <button
                      className={`w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white  ${
                        formSubmitting ? "animate-pulse disabled" : ""
                      } ${formSubmitted ? "bg-green-500 important" : ""}
                      disabled={formSubmitting || formSubmitted}`}
                      type="submit"
                    >
                      {" "}
                      {formSubmitting
                        ? "Processing"
                        : formSubmitted
                        ? "Submitted"
                        : "Submit"}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-4 h-4 ml-2 ${
                          formSubmitted ? "animate-spin disabled" : ""
                        }`}

                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg> */}
                      {formSubmitting && (
                        <svg
                          className={`w-4 h-4 ml-2  ${
                            formSubmitted ? "animate-spin disabled" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="2" x2="12" y2="6"></line>
                          <line x1="12" y1="18" x2="12" y2="22"></line>
                          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                          <line
                            x1="16.24"
                            y1="16.24"
                            x2="19.07"
                            y2="19.07"
                          ></line>
                          <line x1="2" y1="12" x2="6" y2="12"></line>
                          <line x1="18" y1="12" x2="22" y2="12"></line>
                          <line
                            x1="4.93"
                            y1="19.07"
                            x2="7.76"
                            y2="16.24"
                          ></line>
                          <line
                            x1="16.24"
                            y1="7.76"
                            x2="19.07"
                            y2="4.93"
                          ></line>
                        </svg>
                      )}
                    </button>
                    {/* {formSubmitted && (
                      <p className="font-medium text-green-500 py-2">
                        Form submitted successfully!
                      </p>
                    )} */}
                  </div>
                </div>
              </form>

              <div className="mt-3 space-y-3">
                {/* <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 dark:text-gray-400 transition-all duration-200 bg-white border border-gray-500 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </div>
                  Sign up with Google
                </button> */}

                {/* <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 dark:text-gray-400 transition-all duration-200 bg-white border border-gray-500 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6 text-[#2563EB]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </div>
                  Sign up with Facebook
                </button> */}
                {/* <p>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Read our{" "}
                    <span className="capitalize text-indigo-600">
                      privacy policy
                    </span>{" "}
                    and{" "}
                    <span className="capitalize text-indigo-600">
                      terms of service
                    </span>{" "}
                    to learn more
                  </span>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default admin;
// SignUpFour.displayName = "SignUpFour";
