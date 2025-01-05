import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";
const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  console.log(">>>>>", latestProducts);

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrival" />
    </>
  );
};

export default HomePage;
