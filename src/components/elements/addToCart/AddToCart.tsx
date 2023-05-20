import { Product } from "@/../../interfaces";
import React from "react";
import { useAppDispatch,useAppSelector } from "@/../../store/store";
import s from "./index.module.scss";
import { decrement, increment,productQtyInCartSelector } from "@/../store/features/cartSlice";
import QtyBtn from "../QtyBtn";

interface Props {
    product: Product;
  }
  
  const AddToCartBtn = (props: Props) => {
    const qty = useAppSelector((state) =>
      productQtyInCartSelector(state, props.product.id)
    );
    const dispatch = useAppDispatch();
    if (!qty)
      return (
        <div className="flex justify-center">
          <button className={s.btncolor}
            onClick={() => dispatch(increment(props.product))}
          >
            До кошика
          </button>
        </div>
      );
    return (
      <QtyBtn
        onDecrease={() => dispatch(decrement(props.product))}
        onIncrease={() => dispatch(increment(props.product))}
        qty={qty}
      />
    );
  };
  
  export default AddToCartBtn;