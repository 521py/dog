import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import { useDebounce } from "../../hooks/useDebounce"
import { changeSearchValue } from "../../redux/slices/filter"

export const Search = () => {
  const [searchParams] = useSearchParams()
  const [value, setValue] = useState(() => {
    const searching = searchParams.get('search')

    return searching ? searching : ""
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    dispatch(changeSearchValue(debounceValue))
  }, [debounceValue, dispatch])

  const handleChange = (event) => {
    setValue(event.target.value)

    if (event.target.value) {
      return navigate({
        pathname: "/products",
        search: `?search=${event.target.value}`
      })
    }
    return navigate("/products")
  }

  return <input value={value} onChange={handleChange} type="search" />
}