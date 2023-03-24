export const ProductCard = ({ product }) => {

    return (
        <div className="card">
            <div className="img_wrap">
            <img src={product.pictures} alt="Картинка продукта" style={{ width: "60%" }} />
            </div>

            <div className="container">
                <h4><b>{product.name}</b></h4>
                <ul>
                    <li>Количество: {product.stock} шт.</li>
                    <li>Цена: {product.price} руб.</li>
                    <li>Скидка: {product.discount}%</li>
                </ul>

                <div className="btn_wrapper">
                <button className="btn">В корзину</button>
                </div>

                <p>Dog Food Store &</p>
            </div>
        </div>
    )
}