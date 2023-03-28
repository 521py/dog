import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import { getAllProductsWithSearch } from "../../api/products"
import { NoFoundWords } from "../../components/NoFoundWords/NoFoundWords"
import { ProductCard } from "../../components/ProductCard"
import { useAuth } from "../../hooks/useAuth"

export const Products = () => {
    const { token } = useAuth()
    const { search } = useSelector(state => state.filter)


    const { data: products, isLoading, isError, error } = useQuery({
        queryKey: ['getAllProductsWithSearch', search],
        queryFn: async () => {
            const res = await getAllProductsWithSearch(token, search)

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
                {products.length ?
                    products.map(currentProduct => {
                        return <ProductCard product={currentProduct} key={currentProduct._id}
                        />
                    })
                    : <NoFoundWords />}
            </div>
        </div>
    )
}

