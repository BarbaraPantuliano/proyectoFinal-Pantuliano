import { BsCart4 } from "react-icons/bs";

function CartWidget(){
    const cantidadProductos = 0;

    return(
        <div className="cart-widget">
            <BsCart4 />
            <span>{cantidadProductos}</span>
        </div>
    )
}

export default CartWidget;