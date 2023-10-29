import './Services.css'
import { Link } from 'react-router-dom'
export default function Death_Claim_Solution(){
    return(
        <>
            {/*=============== first intro ===============*/}
            <div className="container-fluid">
                <div className="container mt-4 mb-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="/Images/Death-Claim-Solution.png" className="img-fluid rounded-5 mt-3" alt="Death Claim Solution" />
                        </div>
                        <div className="col-sm-6">
                            <div className="h1 title mt-2 color-5">Your Reliable Partner in Navigating the Complexities of Death Claims</div>
                            <div className="bg-color-2 btn m-1 p-2 rounded-5">
                                <Link to="#" className="color-1">Register Complaint</Link>
                            </div>
                            <div className="bg-color-2 btn m-1 p-2 rounded-5">
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
                        <div className="h2 fw-bold color-5 text-center">Death Claim Solution </div>
                        <p>Dealing with the loss of a loved one is an emotional and challenging journey. When it comes to managing death insurance claims, we understand that the last thing you want to worry about is paperwork and negotiations. At ClaimSolution.in, we specialize in providing compassionate and efficient death claim solutions to support you during this difficult time.</p>
                    </div>
                </div>
            </div>

            {/*=============== How We Can Assist You ===============*/}
            <div className="container-fluid pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="text-center h2 fw-bold color-5">How We Can Assist You</div>
                        <div className="row row-cols-1 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Claims-Documentation.png" className="card-img-top p-3" alt="Rejected" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Documentation Support: </h5>
                                    <p className="card-text"> We'll guide you through the process of gathering and completing all necessary documents to ensure a smooth claim submission.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Beneficiary-Advocacy.png" className="card-img-top p-3" alt="Claims Documentation" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Beneficiary Advocacy: </h5>
                                    <p className="card-text"> Our experienced team will advocate for your rights as a beneficiary, ensuring you receive the entitled benefits.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Efficient-Claims-Processing.png" className="card-img-top p-3" alt="Negotiation and Advocacy" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Claims Processing:</h5>
                                    <p className="card-text">We expedite the claims process, working tirelessly to provide timely financial support to your family.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Communication-with-Insurers.png" className="card-img-top p-3" alt="Peace of Mind" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Communication with Insurers: </h5>
                                    <p className="card-text">We handle all communication with insurance companies, sparing you from additional stress.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-color-2">
                                <img src="/Images/Compassionate-Guidance.png" className="card-img-top p-3" alt="Compassionate Guidance" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Compassionate Guidance: </h5>
                                    <p className="card-text">Our team offers empathy and understanding, providing the emotional support you need while handling the technical aspects of the claim.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <p className='mt-5'>Let us alleviate the burden of managing a death claim so that you can focus on honoring the memory of your loved one. We are here to provide you with the assistance and support you deserve during this challenging time. <br />
                        Contact us today, and let us help you navigate the complexities of a death insurance claim.</p>
                        <p className='fw-bold'>In your time of grief, let us be your guiding light.</p>
                    </div>
                </div>
            </div>
        </>
    )
}