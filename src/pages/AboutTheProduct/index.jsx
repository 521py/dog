import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom"
import { ProductInfo } from "../../components/ProductInfo";
import { useAuth } from "../../hooks/useAuth";
import { getActualProduct } from "./../../api/products"

export const AboutTheProduct = () => {
  const { productId } = useParams();
  const { token } = useAuth()

  const { data: actualProduct, isLoading, isError, error } = useQuery({
    queryKey: ['getActualProduct'],
    queryFn: async () => {
      const res = await getActualProduct(token, productId)

      return (await res.json())
    }
  })

  if (isLoading) return <p>Загрузка...</p>

  if (isError) return <p>Произошла ошибка: {error}</p>

  return (
    <div>
      <h1>данные по конкретному продукту</h1>
      <ProductInfo product={actualProduct} />
      <Link to={"/products"}>Вернуться в каталог ➡️</Link>
    </div>

  )
}