import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {

    const { data } = useSelector(state => state.cart);

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src="/images/logo.png" alt="Logo" width="80" />
                    </div>
                    <div className="col-8">
                        <ul className="navbar">
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <button className="btn btn-primary" >Cart item: {data.length}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;