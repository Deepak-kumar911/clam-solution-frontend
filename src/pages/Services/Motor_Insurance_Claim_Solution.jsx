import './Services.css'
import { Link } from 'react-router-dom'
export default function Motor_Insurance_Claim_Solution(){
    return(
        <>
            {/*=============== first intro ===============*/}
            <div className="container-fluid">
                <div className="container mt-4 mb-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="/Images/Motor-Insurance-Claim-Solution.png" className="img-fluid rounded-5 mt-2" alt="Motor Insurance Claim Solution" />
                        </div>
                        <div className="col-sm-6">
                            <div className="h1 title color-5">Your vehicle is more than just transportation; it's your freedom.</div>
                            <div className="bg-color-2 btn m-1 p-2 mt-1 rounded-5">
                                <Link to="#" className="color-1">Register Complaint</Link>
                            </div>
                            <div className="bg-color-2 btn m-1 p-2 mt-1 rounded-5">
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
                        <div className="h2 fw-bold color-5 text-center">Motor Insurance Claim Solution </div>
                        <p className='text-justify'>Experiencing the stress and frustration of a rejected or delayed motor insurance claim? We understand the importance of your vehicle and the urgency of getting back on the road. At ClaimSolution.in, we specialize in providing comprehensive solutions to tackle motor insurance claim challenges effectively.</p>
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
                                    <p className="card-text">Our experts are well-versed in the intricacies of motor insurance policies and will work tirelessly to overturn claim rejections swiftly.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Claims-Documentation.png" className="card-img-top p-3" alt="Claims Documentation" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Claims Documentation: </h5>
                                    <p className="card-text">We'll manage the paperwork, ensuring that all essential documents are completed accurately and submitted promptly.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Negotiation-and-Advocacy.png" className="card-img-top p-3" alt="Negotiation and Advocacy" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Negotiation with Insurers: </h5>
                                    <p className="card-text">Our skilled negotiators will liaise with insurance providers on your behalf, ensuring that you receive the maximum benefits from your policy.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Efficient-Claims-Processing.png" className="card-img-top p-3" alt="Peace of Mind" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Efficient Claims Processing:</h5>
                                    <p className="card-text">We streamline the claims process, expediting your claim to minimize downtime.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <p className='mt-5'>Let us handle the complexities of your motor insurance claim, so you can focus on what matters – getting back behind the wheel with confidence.
                        <br /> Contact us today, and let us navigate the insurance claim maze for you. </p>
                        <p className='fw-bold'>Your Partner in Resolving All Your Insurance Claim Matters</p>
                    </div>
                </div>
            </div>
        </>
    )
}