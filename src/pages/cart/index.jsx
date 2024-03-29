import CartItemCard from "../../components/elements/CardItemCard";
import React from "react";
import { TotalPriceSelector } from "store/features/cartSlice";
import { useAppSelector } from "store/store";
import Products from "@/components/products";
import Link from "next/link";
import { useAppDispatch } from "store/store";
import { emptyCart } from "@/../../store/features/cartSlice";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(TotalPriceSelector);

  if (cartItems.length === 0) {
    return (
      <>
        <p className="text-4xl font-bold text-center my-3">Кошик замовлень</p>
        <div className=" flex flex-col p-2 mb-2 text-center w-2/5 items-center mx-auto">
          <span className="text-red-600 py-4 px-64 whitespace-nowrap rounded
           font-extrabold text-3xl my-8 bg-orange-200">
            Ваш кошик порожній :((
          </span>
          <Link
            className="text-black text-4xl font-bold rounded py-6 px-6 bg-green-300"
            href="/catalog"
          >
            Вперед до покупок
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="text-4xl font-bold text-center my-3">Кошик замовлень</p>
      <div className="p-2 mb-2 relative">
        {cartItems.map((item) => (
          <CartItemCard cartItem={item} />
        ))}

        <div className="flex">
          <p className="text-red-600 font-extrabold text-3xl my-4 ms-auto">
            Загальна Сума:{" "}
            <span className="text-slate-900 font-bold">{totalPrice} $</span>
            <Link
              className="text-black rounded m-24 mt-12 py-2 px-3 bg-green-400"
              href="/payment"
            >
              Перейти до оплати
            </Link>
            <Link
              className="text-black text-3xl font-bold rounded my-4 py-2 px-2 bg-orange-400"
              href="/catalog"
            >
              Назад до покупок
            </Link>
          </p>
        </div>
        <button
          onClick={() => dispatch(emptyCart())}
          className="flex bg-black hover:bg-red-700 text-white 
          font-bold py-2 px-4 rounded fixed top-20 right-3"
        >
          Очистити кошик
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-6 col-span-3 my-24">
        Вам може сподобатись
      </h1>
      <Products className="grid grid-cols-4" limit={4} columns={4} />
    </>
  );
};

export default CartPage;
