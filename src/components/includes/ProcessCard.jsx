import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeCart } from "./../../store/slices/CartSlice";

function ProccCard({ data }) {
    const disptch = useDispatch();

    const addCartItem = (item) => {
        disptch(addToCart(item));
    }

    const subCartItem = (item) => {
        disptch(removeCart(item));
    }
    return (
        <div className="process-card">
            <span>0{data.id}</span>
            <img src="" alt="" />
            <h4>{data.title}</h4>
            <p>{data.content}</p>
            <div>
                <button onClick={() => subCartItem(data)} className="btn btn-primary">-</button>
                <button type="button" className="btn btn-primary">Add To Cart</button>
                <button onClick={() => addCartItem(data)} className="btn btn-primary">+</button>
            </div>
        </div>
    )
}

export default ProccCard;