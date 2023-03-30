import { Link } from "react-router-dom"

export const Footer = () => {

    return (<div>
        <footer>Footer</footer>
        <div className="footerLinks">
            <Link to="/products">Каталог </Link>
            <Link to="/contacts">Контакты </Link>
        </div>
    </div>)
}