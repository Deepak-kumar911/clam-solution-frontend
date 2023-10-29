import { Link } from 'react-router-dom'
import '../../assets/css/navber.css'
export default function Navbar2(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-color-1 ">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <Link to="/" className="nav__logo">
                        <img src="/Images/icons/company-logo.png" height={70} alt="Company logo" loading="lazy" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0 " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">  
                                <Link to="/" className="nav-link color-4 fw-bold" >
                                    Home
                                </Link>
                            </li>
                {/*=============== DROPDOWN 1 ===============*/}
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Serviecs
                            </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/Health-insurance-claim-solution" className="dropdown__link bg-color-1">
                                            Health insurance claim solution
                                        </Link>
                                    </li>
                                    <li>                   
                                        <Link to="/Motor-Insurance-Claim-Solution" className="dropdown__link bg-color-1">
                                            Motor insurance claim solution
                                        </Link>
                                    </li>
                                    {/* <li><hr className="dropdown-divider" /></li> */}
                                    <li>
                                        <Link to="/Death-Claim-Solution" className="dropdown__link bg-color-1">
                                            Death claim solution
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Any-Insurance-Claim-Solution" className="dropdown__link bg-color-1">
                                            Any insurance claim solution
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">  
                                <Link to="/about-us" className="nav-link color-4 fw-bold" >
                                    About us
                                </Link>
                            </li>
                {/*=============== DROPDOWN 1 ===============*/}
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Users
                            </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/partner/signin" className="dropdown__link bg-color-1">
                                            Partner
                                        </Link>
                                    </li>
                                    <li>                   
                                        <Link to="/" className="dropdown__link bg-color-1">
                                            Client
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact-us" className="color-4 fw-bold nav-link">
                                Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" className="color-4 fw-bold nav-link">
                                Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}