import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProductFeed } from "../components/ProductFeed";
import styles from "../styles/Home.module.css";

export default function Home({ products }) {
  return (
    <div>
      <Navbar />
      <ProductFeed products={products} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
