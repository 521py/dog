import { NavLink } from "react-router-dom"

export const NotFoundPage = () => {

    return (
        <div className="NotFoundPage">
            <h1>страница не найдена</h1>
            <NavLink to="/main"><h4>на главную</h4></NavLink>
        </div>
    )
}