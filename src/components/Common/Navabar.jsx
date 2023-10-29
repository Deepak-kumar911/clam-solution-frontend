import '../../assets/css/styles.css'
// import '../../assets/js/main.js'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
    <>
  {/*=============== HEADER ===============*/}
  <header className="header bg-color-1">
    <nav className="nav container">
      <div className="nav__data">
        <Link to="/" className="nav__logo">
          <img
            src="Images/icons/company-logo.png"
            height={70}
            alt=""
            loading="lazy"
          />
        </Link>
        <div className="nav__toggle bg-color-2" id="nav-toggle">
          <i className="ri-menu-line nav__burger" />
          <i className="ri-close-line nav__close" />
        </div>
      </div>
      {/*=============== NAV MENU ===============*/}
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li>
            <Link to="/" className="nav__link bg-color-1 color-4">
              Home
            </Link>
          </li>
          {/*=============== DROPDOWN 1 ===============*/}
          <li className="dropdown__item">
            <div className="nav__link bg-color-1 color-4">
              Serviecs <i className="ri-arrow-down-s-line dropdown__arrow" />
            </div>
            <ul className="dropdown__menu bg-color-1">
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
              {/*=============== DROPDOWN SUBMENU ===============*/}
              {/* <li className="dropdown__subitem">
                <div className="dropdown__link bg-color-1">
                  Reports{" "}
                  <i className="ri-add-line dropdown__add" />
                </div>
                <ul className="dropdown__submenu">
                  <li>
                    <a href="#" className="dropdown__sublink bg-color-1">
                      <i className="ri-file-list-line" /> Documents
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown__sublink bg-color-1">
                      <i className="ri-cash-line" /> Payments
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown__sublink bg-color-1">
                      <i className="ri-refund-2-line" /> Refunds
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </li>
          <li>
            <Link to="/about-us" className="nav__link bg-color-1 color-4">
              About us
            </Link>
          </li>
          {/*=============== DROPDOWN 2 ===============*/}
          <li className="dropdown__item">
            <div className="nav__link bg-color-1 color-4">
              Users <i className="ri-arrow-down-s-line dropdown__arrow" />
            </div>
            <ul className="dropdown__menu bg-color-1">
              <li>
                <a href="#" className="dropdown__link bg-color-1">
                  {/* <i className="ri-message-3-line" /> */} Parter
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link bg-color-1">
                  {/* <i className="ri-message-3-line" /> */} Client
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact-us" className="nav__link bg-color-1 color-4">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="nav__link bg-color-1 color-4">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  {/*=============== MAIN JS ===============*/}

    </>)
}