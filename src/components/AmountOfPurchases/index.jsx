import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import { getActualProduct } from "../../api/products"
import { useAuth } from "../../hooks/useAuth"
import { totalPrice } from "../../utils/cart"

export const AmountOfPurchases = () => {
    const cart = useSelector(state => state.cart)
    const { token } = useAuth()

    const { data: productsChecked } = useQuery({
        queryKey: ["getCartProduct", cart],
        queryFn: async () => {
            return await Promise.allSettled(
                cart.map(async productInTheCart => {
                    const product = await getActualProduct(token, productInTheCart.id)
                        .then(res => res.json())
                    return { ...product, isChecked: productInTheCart.isChecked, count: productInTheCart.count }
                }))
                .then(res => res.map(element => element.value).filter(el => el.isChecked === true))
        },
        enabled: !!cart.length,
    })

    console.log(productsChecked);

    let totalPriceOfAll = 0;
    productsChecked && productsChecked.forEach(({ count, price, discount }) => {
        totalPriceOfAll += totalPrice(count, price, discount)
    });

    return (
        <div>
            <p>К оформлению: </p>
            <ol>сумма твоей корзины: </ol>
            {/* {productsChecked.map(element => <li>{element.name}</li>)} */}
            <li>total: {totalPriceOfAll}</li>
        </div>
    )
}