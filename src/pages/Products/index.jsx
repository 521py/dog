import { useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsWithSearch } from "../../api/products"
import { NoFoundWords } from "../../components/NoFoundWords/NoFoundWords"
import { ProductCardInCatalog } from "../../components/ProductCardInCatalog"
import { useAuth } from "../../hooks/useAuth"
import { changeSortingValue } from "../../redux/slices/filter"
import { DISCOUNT_SORT_DOWN, DISCOUNT_SORT_UP, PRICE_SORT_DOWN, PRICE_SORT_UP } from "../../utils/sort"

export const Products = () => {
	const { token } = useAuth()
	const dispatch = useDispatch()
	const { search, sorting } = useSelector(state => state.filter)

	const { data: products, isLoading, isError, error } = useQuery({
		queryKey: ['getAllProductsWithSearch', search, sorting],
		queryFn: async () => {
			const res = await getAllProductsWithSearch(token, search)

			if (res.ok) {
				const products = await res.json();

				switch (sorting) {
					case PRICE_SORT_UP:
						return products.sort((a, b) => {
							if (a.price > b.price) return -1
							if (a.price < b.price) return 1
							return 0
						});
					case PRICE_SORT_DOWN:
						return products.sort((a, b) => {
							if (a.price > b.price) return 1
							if (a.price < b.price) return -1
							return 0
						});
					case DISCOUNT_SORT_UP:
						return products.sort((a, b) => {
							if (a.discount > b.discount) return -1
							if (a.discount < b.discount) return 1
							return 0
						});
					case DISCOUNT_SORT_DOWN:
						return products.sort((a, b) => {
							if (a.discount > b.discount) return 1
							if (a.discount < b.discount) return -1
							return 0
						});

					default:
						return products;
				}
			}
		}
	})

	if (isLoading) return <p>Загрузка...</p>

	if (isError) return <p>Произошла ошибка: {error}</p>

	return (
		<div>
			<h1>продукты</h1>
			<div className="products_wrapper">
				<select
					value={null}
					onChange={(event) => dispatch(changeSortingValue(event.target.value))}>
					<option value={null}>Без сортировки</option>
					<option value={PRICE_SORT_UP}>Самые дорогие</option>
					<option value={PRICE_SORT_DOWN}>Самые дешёвые</option>
					<option value={DISCOUNT_SORT_UP}>С большой скидкой</option>
					<option value={DISCOUNT_SORT_DOWN}>Без скидки</option>
				</select>

				<div className="products_wrapper">
					{products.length ?
						products.map(currentProduct => {
							return <ProductCardInCatalog product={currentProduct} key={currentProduct._id}
							/>
						})
						: <NoFoundWords />}
				</div>
			</div>
		</div>
	)
}

