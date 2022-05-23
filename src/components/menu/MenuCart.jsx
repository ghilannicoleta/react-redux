import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSubMenuCart, hideSubMenuCart } from '../../actions/menu/setShowCart.action';


export function MenuCart() {
    const dispatch = useDispatch();
    const chosenProduct = ['Your cart is empty']

    // const [show, setShow] = useState(true);

    const subMenuCartDisplay = useSelector((state) => state.subMenuCartDisplay);

    return (
        <div className="cart container w-10 align-middle cursor-pointer"
            onMouseEnter={() => dispatch(showSubMenuCart())}
            onMouseLeave={() => dispatch(hideSubMenuCart())}>

            <img src="https://www.svgrepo.com/show/227945/shopping-cart.svg"
                alt="cart logo" />

            <ul
                className="bg-neutral-800 border border-neutral-700 p-4 rounded-md   w-[15%] absolute "
                hidden={subMenuCartDisplay.show}
            >
                {chosenProduct.map((str, index) => {
                    return (
                        <li key={index}
                            className="text-xl text-amber-400">{str}</li>
                    )
                })}
            </ul>

        </div>
    )
}

export default MenuCart