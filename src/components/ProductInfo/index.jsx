

export const ProductInfo = ({ product }) => {

  return (
    <div className="card">
      <div className="img_wrap">
        <img src={product.pictures} alt="Картинка продукта" style={{ width: "60%" }} />
      </div>

      <div className="container">
        <h4><b>{product.name}</b></h4>
        <ul className="ul">
          <li>Количество: {product.stock} шт.</li>
          <li>Цена: {product.price} руб.</li>
          <li>Скидка: {product.discount}%</li>
          <li>Вес: {product.wight}</li>
          <li>Описание: {product.description}</li>
        </ul>
        </div>
      </div>
  )
}