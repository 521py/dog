import { Link } from "react-router-dom"

export const NoProductsInCart = () => {

    return (
        <div>
            <h2>твоя корзина пустая, переходи по ссылкам ниже </h2>
            <div className="NavLinkWrapper2">
                <Link className="Link" to={"/products"}>Каталог</Link>
                <Link className="Link" to={"/main"}>Главная страница</Link>
                <img className="logo2" src="https://cdn-icons-png.flaticon.com/512/47/47203.png"></img>
            </div>
        </div>
    )
}