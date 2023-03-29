import { Product } from "./Product";

export const ProductFeed = ({ products }) => {
  return (
    <section className="text-gray-600 dark:text-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.product.map(
            ({ id, title, price, description, category, image }) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
