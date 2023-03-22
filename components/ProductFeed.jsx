import { Product } from "./Product";

export const ProductFeed = ({ products }) => {
  return (
    <section className="text-gray-600 dark:text-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(
            ({ id, title, price, description, category, image }) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                // className="lg:w-1/4 sm:w-1/2 p-4 w-full"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

// const products = [
//   {
//     title: "SAMSUNG Crystal 4K Pro 146 cm (58 inch)",
//     price: "₹48,490",
//     image:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/-original-imageq5ekyzg27wa.jpeg?q=70",
//     brand: "SAMSUNG",
//   },
//   {
//     title: "SENS Pikaso 140 cm (55 inch) Ultra HD (4K)",
//     price: "₹30,999",
//     image:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/-original-imagndaashuba2wn.jpeg?q=70",
//     brand: "SENS",
//   },
//   {
//     title: "Hisense 164 cm (65 inch) Ultra HD (4K)",
//     price: "₹59,999",
//     image:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/-original-imagkj24hzdfxhec.jpeg?q=70",
//     brand: "Hisense",
//   },
//   {
//     title: "iFFALCON by TCL U62 164 cm (65 inch)",
//     price: "₹49,999",
//     image:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/-original-imaghepnfyhyqzqk.jpeg?q=70",
//     brand: "iFFALCON",
//   },
//   {
//     title: "Sansui 165 cm (65 inch) QLED Ultra HD (4K)",
//     price: "₹56,990",
//     image:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/-original-imaghkx9qgvuvshg.jpeg?q=70",
//     brand: "Sansui",
//   },
//   {
//     title: "LG UQ7500 139 cm (55 inch) Ultra HD (4K)",
//     price: "₹48,490",
//     image:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/-original-imagg24zpbk2h7tx.jpeg?q=70",
//     brand: "LG",
//   },
//   {
//     title: "OnePlus Y1S Pro 138 cm (55 inch) Ultra HD (4K)",
//     price: "₹39,999",
//     image:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/55ud2a00-55-y1s-pro-oneplus-original-imagk9wcydhe7pbv.jpeg?q=70",
//     brand: "OnePlus",
//   },
// ];
// ProductsThree.displayName = "ProductsThree";
