import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../../api/products"
import { ProductCard } from "../../components/ProductCard"
import { useAuth } from "../../hooks/useAuth"

export const Products = () => {
    const { token } = useAuth()


    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['getAllProducts'],
        queryFn: async () => {
            const res = await getAllProducts(token)

            if (res.ok) {
                return await res.json();
            }
        }
    })
    if (isLoading) return <p>Загрузка...</p>

    if (isError) return <p>Произошла ошибка: {error}</p>


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

