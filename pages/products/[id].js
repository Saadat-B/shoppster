import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Product } from "../../components/Product";

const productPage = ({ product }) => {
  return (
    <div>
      <Navbar />
      <Product
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        category={product.category}
        image={product.image}
      />
      <Footer />
    </div>
  );
};
export default productPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  //   console.log(id);
  const products = await fetch(
    "http://localhost:3000/api/product/getAllProducts"
  ).then((res) => res.json());
  const product = products.product.find((obj) => obj.id === parseInt(id));

  return {
    props: {
      product,
    },
  };
}
