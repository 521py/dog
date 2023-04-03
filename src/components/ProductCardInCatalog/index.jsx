import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart } from "../../redux/slices/cart"

export const ProductCardInCatalog = ({ product }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const HandleClickAddToCart = (event) => {
    dispatch(addToCart(product._id))
    event.stopPropagation()
  }

  return (
    <div onClick={() => navigate(product._id)} className="card">
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
          <button className="btn" onClick={(event) => HandleClickAddToCart(event)}>В корзину</button>
        </div>
      </div>
    </div>
  )
}