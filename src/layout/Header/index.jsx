import { NavLink } from "react-router-dom"

export const Header = () => {

    // const handleExit = () => {}

    return <header className="wrapper">
        <div className="logo">
            <img className="logo5" src="https://cdn-icons-png.flaticon.com/512/47/47203.png"></img>
            <img className="logo6" src="https://cdn-icons-png.flaticon.com/512/47/47203.png"></img>
        </div>


        <div className="NavLinkWrapper">

            <NavLink to="/products" >products </NavLink>

            <NavLink to="/user/me" > user </NavLink>

            {/* <button onClick={handleExit} className="btn">Выход</button> */}
        </div>

    </header>
}