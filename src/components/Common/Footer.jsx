import '../../assets/css/styles.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(<>
    
        {/* footer */}
        {/* Remove the container if you want to extend the Footer to full width. */}
        <div className="container-fluid p-0 bottom-0">
          <footer className="text-center text-lg-start bg-color-2">
            {/* Grid container */}
            <div className="container-px-5 p-4 pagination pb-0">
              {/*Grid row*/}
              <div className="row my-4">
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <div
                    className="w-75 shadow-1-strong d-flex align-items-center justify-content-center mb-2 mx-auto"
                    style={{height: 100 }}
                  >
                    <img
                      src="/Images/icons/company-logo-2.png"
                      height={70}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <p className="text-center color mb-0">
                    We ensure justice for all, supporting those with insurance claims
                    and legal battles.
                  </p>
                  <ul className="list-unstyled d-flex flex-row justify-content-center">
                    <li>
                      <a className="text-dark px-2" href="#!">
                        <i className="bi bi-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="text-dark px-2" href="#!">
                        <i className="bi bi-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="text-dark ps-2" href="#!">
                        <i className="bi bi-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4">Quick links</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Link to="/about-us" className="color-1">
                        About us
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/patnership" className="color-1">
                        Patnership
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/contact-us" className="color-1">
                        Contact us
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/blogs" className="color-1">
                        blogs
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/policy" className="color-1">
                        Know our policy
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4">Services</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Link to="/Health-insurance-claim-solution" className="color-1">
                        Health insurance claim solution
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/Motor-Insurance-Claim-Solution" className="color-1">
                        Motor insurance claim solution
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/Death-Claim-Solution" className="color-1">
                        Death claim solution
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/Any-Insurance-Claim-Solution" className="color-1">
                        Any insurance claim solution
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/career" className="color-1">
                        Career / Job
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4">Contact</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p>
                        <i className="bi bi-geo-alt-fill" /> A3, KH No. 150, Bhavishy
                        Apartment, Nai Basti Road, Deoli, South Delhi -110080
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="bi bi-telephone-fill" /> 011 49858616
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="bi bi-envelope-fill" /> help@claimsolution.in
                      </p>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2023 Copyright:
              <a className="text-dark" href="https://ClaimSolution.in/">
                ClaimSolution.in
              </a>
            </div>
            {/* Copyright */}
          </footer>
        </div>
        {/* End of .container */}
    </>)
}