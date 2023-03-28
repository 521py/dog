import { useDispatch } from "react-redux"
import { decrementProduct, incrementProduct, removeFromCart } from "../../redux/slices/cart";
import { totalPrice } from "../../utils/cart"

export const ProductCart = ({ product: { name, count, price, discount, pictures, _id, stock } }) => {

    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="img_wrap">
                <img src={pictures} alt="Картинка продукта" style={{ width: "60%" }} />
            </div>
            <div className="container" >
                <h4><b>{name}</b></h4>
                <ul className="ul">
                    <li>📦 Количество: {count} шт.</li>
                    <li>💸 Цена: {price} руб.</li>
                    <li>⚡️ Скидка: {discount}%</li>

                </ul>
                <p>Dog Food Store &</p>
            </div>
            <div className="spans">
                <div className="spans2">
                    <button className="btn" onClick={() => dispatch(decrementProduct(_id))}>-</button>
                    <span>количество 1 /</span>
                    <button className="btn" onClick={() => dispatch(incrementProduct(_id))}>+</button>
                </div>
                <div className="spans2">
                    <span> стоимость {totalPrice(count, price, discount)} rubles</span>
                </div>
                <div className="spans">
                    <button className="btn3" onClick={() => dispatch(removeFromCart(_id))}>delete</button>
                </div>
            </div>
        </div>
    )
}