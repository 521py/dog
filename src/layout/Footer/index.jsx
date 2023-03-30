import { Link } from "react-router-dom"

export const Footer = () => {

    return (
        <div>
            <footer>Footer</footer>
            <div className="footerLinks">
                <Link to="/products">Каталог </Link>
                <Link to="/contacts">Контакты </Link>
            </div>
            <div className="footerDiv">
                <h2>Мы на связи </h2>
                <p>📱 8 (999) 00-00-00</p>
            </div>
        </div>
    )
}