import { useDispatch, useSelector } from "react-redux"
import { changeCheckStatus, decrementProduct, incrementProduct, removeFromCart } from "../../redux/slices/cart";
import { totalPrice } from "../../utils/cart"
import { AmountOfPurchases } from "../AmountOfPurchases";

export const ProductCart = ({ product: { name, price, discount, pictures, _id, stock } }) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const { count, isChecked } = cart.find(el => el.id === _id)

    const handleChange = (event) => {
        dispatch(changeCheckStatus({ _id, isChecked: event.target.checked }))
    }

    return (
        <div>
            <AmountOfPurchases />
            <div className="card">
                <input className="checkbox" type="checkbox" checked={isChecked} onChange={handleChange}></input>
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
                        <button className="btn" onClick={() => dispatch(decrementProduct(_id))}>
                            -
                        </button>
                        <span>количество 1 /</span>
                        <button className="btn" onClick={() => dispatch(incrementProduct(_id))} disabled={count === stock}>
                            +
                        </button>
                    </div>
                    <div className="spans2">
                        <span> стоимость {totalPrice(count, price, discount)} rubles</span>
                    </div>
                    <div className="spans">
                        <button className="btn3" onClick={() => dispatch(removeFromCart(_id))}>
                            delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}