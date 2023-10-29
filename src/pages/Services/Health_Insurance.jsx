import './Services.css'
import { Link } from 'react-router-dom'
export default function Health_Insurance(){
    return(
        <>
            {/*=============== first intro ===============*/}
            <div className="container-fluid">
                <div className="container mt-4 mb-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="/Images/Health-Insurance.jpg" className="img-fluid rounded-5" alt="Health-Insurance" />
                        </div>
                        <div className="col-sm-6">
                            <div className="h1 title mt-5 color-5">Your health is your wealth, and we're here to protect it.</div>
                            <div className="bg-color-2 btn m-1 p-3 mt-3 rounded-5">
                                <Link to="#" className="color-1">Register Complaint</Link>
                            </div>
                            <div className="bg-color-2 btn m-1 p-3 mt-3 rounded-5">
                                <a href="#" className="color-1">95136-31312</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*=============== first paragraph ===============*/}
            <div className="container-fluid mt-4 bg-color-3">
                <div className="container pb-4 pt-5">
                    <div className="row">
                        <div className="h2 fw-bold color-5 text-center">Health Insurance Claim Solution</div>
                        <p className='text-justify'>Struggling with a rejected health insurance claim? You're not alone. Dealing with health insurance paperwork and navigating the complexities of the claims process can be overwhelming. That's where we step in to help. <br /><br />
    At ClaimSolution.in, we specialize in providing tailored solutions to address your health insurance claim challenges. Our experienced team is dedicated to ensuring that you receive the coverage and benefits you deserve for your medical expenses.</p>
                    </div>
                </div>
            </div>

            {/*=============== How We Can Assist You ===============*/}
            <div className="container-fluid pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="text-center h2 fw-bold color-5">How We Can Assist You</div>
                        <div className="row row-cols-1 row-cols-md-4 g-3">
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Claim-Rejection-Resolution.png" className="card-img-top p-3" alt="Rejected" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Claim Rejection Resolution: </h5>
                                    <p className="card-text">We understand the intricacies of health insurance policies and will work diligently to resolve claim rejections promptly.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Claims-Documentation.png" className="card-img-top p-3" alt="Claims Documentation" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Claims Documentation: </h5>
                                    <p className="card-text">Let us handle the paperwork. We'll ensure that all necessary documents are accurately completed and submitted on time.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Negotiation-and-Advocacy.png" className="card-img-top p-3" alt="Negotiation and Advocacy" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Negotiation and Advocacy: </h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.Our experts will negotiate with insurance providers on your behalf to maximize your claim benefits.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Peace-of-Mind.png" className="card-img-top p-3" alt="Peace of Mind" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Peace of Mind: </h5>
                                    <p className="card-text">We'll take the stress out of the process, allowing you to focus on your health and well-being.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <p className='mt-5'>Don't let a rejected health insurance claim stand in the way of your medical care. Contact us today, and let us guide you toward a successful resolution.</p>
                        <p className='fw-bold'>Your health is your wealth, and we're here to protect it.</p>
                    </div>
                </div>
            </div>
        </>
    )
}