import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h4>FOR SECURE PAYMENT</h4>
                    </div>
                    <div className="col-3">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <Link to={'/home'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h4>COMPANY</h4>
                    </div>
                    <div className="col-3">
                        <h4>CONTACT US</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;