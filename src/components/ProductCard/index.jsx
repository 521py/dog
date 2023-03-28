import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart } from "../../redux/slices/cart"

export const ProductCard = ({ product }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className="card">
            <div className="img_wrap">
            <img src={product.pictures} alt="Картинка продукта" style={{ width: "60%" }} />
            </div>

            <div className="container">
                <h4><b>{product.name}</b></h4>
                <ul className="ul">
                    <li>📦 Количество: {product.stock} шт.</li>
                    <li>💸 Цена: {product.price} руб.</li>
                    <li>⚡️ Скидка: {product.discount}%</li>
                </ul>

                <div className="btn_wrapper">
                <button className="btn" onClick={() => dispatch(addToCart(product._id))}>В корзину</button>
                </div>

                <p>Dog Food Store &</p>
            </div>
        </div>
    )
}