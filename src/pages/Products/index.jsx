import { useEffect, useState } from "react"
import { getAllProducts } from "../../api/products"
import { ProductCard } from "../../components/ProductCard"
import { useAuth } from "../../hooks/useAuth"

export const Products = () => {
    const [data, setData] = useState({ total: 0, products: [] })
    const {token} = useAuth()


    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllProducts(token)

            if (res.ok) {
                const responce = await res.json();
                return setData(responce)
            }

            throw new Error("произошла ошибка")
        }

        fetchData()
    }, [token])


    return (
        <div>
            <h1>продукты</h1>
            <div className="products_wrapper">
                {data.products.map(currentProduct => {
                    return <ProductCard product={currentProduct} key={currentProduct._id}
                    />
                })}
            </div>
        </div>
    )
}

