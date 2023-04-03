import { useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { getActualProduct } from "../../api/products"
import { AmountOfPurchases } from "../../components/AmountOfPurchases"
import { NoProductsInCart } from "../../components/NoProductsInCart"
import { ProductCardInCart } from "../../components/ProductCardInCart"
import { useAuth } from "../../hooks/useAuth"
import { removeAllProductsFromCart } from "../../redux/slices/cart"

export const Cart = () => {
  const { token } = useAuth()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ["getCartProduct", token, cart.length],
    queryFn: async () => {
      return await Promise.allSettled(
        cart.map(async productInTheCart =>
          await getActualProduct(token, productInTheCart.id)
            .then(res => res.json())))
        .then(res => res.map(el => el.value))
    },
    enabled: !!cart.length,
  })

  if (!cart.length) {
    return <NoProductsInCart />
  }

  if (isLoading) return (<div><h1>загрузка...</h1></div>)

  if (isError) return (<div><h1>произошла ошибка {error}.</h1></div>)

  return (
    <div className="cartt">
      <h1>корзина</h1>
      <div className="products_wrapper">
        <AmountOfPurchases />
      </div>
      <div className="products_wrapper">
        {products.map(product => <ProductCardInCart key={product._id} product={product} />)}
      </div>
      <div className="btnCart">
        <button className="btn" onClick={() => dispatch(removeAllProductsFromCart())}>Очистить корзину</button>
      </div>
      <div className="btnCart">
        <button className="btn">Купить выбранные</button>
      </div>
    </div>
  )
}