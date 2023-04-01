import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ProductOverview } from "../../components/ProductOverview";

const productPage = ({ product }) => {
  return (
    <div>
      <Navbar />
      <ProductOverview product={product} />
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
    "https://shoppster-bx97ji1ky-saadat-b.vercel.app/api/product/getAllProducts"
  ).then((res) => res.json());
  const product = products.product.find((obj) => obj.id === parseInt(id));

  return {
    props: {
      product,
    },
  };
}
