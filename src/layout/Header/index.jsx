import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { Search } from "../../components/Search"
import { clearCart } from "../../redux/slices/cart"
import { removeUser } from "../../redux/slices/user"

export const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)

    const handleExit = () => {
        localStorage.clear()
        dispatch(removeUser())
        dispatch(clearCart())
        navigate("/signin")
    }

    return <header className="wrapper">
        <div className="logo">
            <img className="logo5" src="https://cdn-icons-png.flaticon.com/512/47/47203.png"></img>
            <img className="logo6" src="https://cdn-icons-png.flaticon.com/512/47/47203.png"></img>
        </div>

        {token &&
            <>
                <div className="search">
                    <Search />
                </div>

                <div className="NavLinkWrapper">

                    <NavLink to="/products" > products </NavLink>

                    <NavLink to="/user/me" > user </NavLink>

                    <NavLink to="/cart" > 🗑cart({cart.length ? cart.length : null}) </NavLink>

                    <NavLink to="/favorites" > ⭐️faves </NavLink>

                    <button onClick={handleExit} className="btn2">Выход</button>
                </div>
            </>}
    </header>
}