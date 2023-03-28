import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getActualProduct } from "../../api/products"
import { NoProductsInCart } from "../../components/NoProductsInCart"
import { ProductCard } from "../../components/ProductCard"
import { ProductCart } from "../../components/ProductCart"
import { useAuth } from "../../hooks/useAuth"
import { removeAllProductsFromCart } from "../../redux/slices/cart"

export const Cart = () => {
    const { token } = useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    // getActualProduct

    const { data: products, isLoading, isError, error } = useQuery({
        queryKey: ["getCartProduct", token, cart.length],
        queryFn: async () => {
            return await Promise.allSettled(
                cart.map(async ProductInTheCart =>
                    await getActualProduct(token, ProductInTheCart.id)
                        .then(res => res.json())))
                .then(res => res.map(el => el.value))
            // console.log(products)
        },
        enabled: !!cart.length,
    })

    if (!cart.length) {
        return <NoProductsInCart />
    }

    if (isLoading) return (<div><h1>загрузка...</h1></div>)

    // console.log(products)

    if (isError) return (<div><h1>произошла ошибка {error}.</h1></div>)



    return (
        <div>
            <h2>корзина</h2>
            <div className="cart">
                {products.map(product => <ProductCart key={product._id} product={product} />)}
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