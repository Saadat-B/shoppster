import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { ProductsThree } from "../components/ProductsThree";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ProductsThree />
    </div>
  );
}
