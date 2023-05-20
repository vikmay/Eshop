import axios from "@/utils/axios";
import s from "./index.module.scss";
import Products from "@/components/Products";
import AddToCartBtn from "../../components/elements/addToCart/AddToCart";

const ProductDetails = ({ product }) => {
  const category = product.category;

  return (
    <>
      <div className="flex mt-12 w-3/5">
        <img src={product.image} alt={product.title} width={200} />
        <div className="flex flex-col ms-24 justify-between">
          <h2 className="text-3xl font-extrabold">{product.title}</h2>
          <p className="font-bold">{product.description}</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{product.price} USD</p>
          <AddToCartBtn product={product} />
        </div>

      </div>


      <div>
        <h2 className="text-3xl font-extrabold mt-24">Товари цієї ж категорії</h2>
        <Products limit={12} columns={4} category={category} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await axios.get(`/products/${id}`);
  return { props: { product: response.data } };
}

export default ProductDetails;
