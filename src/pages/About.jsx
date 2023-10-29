// import style from './about.module.css'
// import { Link } from "react-router-dom"
export default function About(){
    return(
    <>
        
        {/* First part */}
        <div className="container-fluid mb-3 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="title mt-5">
                  <p>About Us - Empowering Justice and Legal Resolution</p>
                </div>
              </div>
              <div className="col-sm-6">
                <img src="/Images/home/ClaimSolution-banner.jpg" alt="" className="img-fluid mb-3" />
              </div>
            </div>
          </div>
        </div>

        {/* About us para */}
        <div className="container-fluid bg-color-2 pt-3 pb-3">
          <div className="container">
            <div className="h2 fw-bold pt-4 pb-3 text-center">About us</div>
              <p>Welcome to ClaimSolution.in, a platform committed to reshaping the landscape of justice and legal empowerment. We stand as a beacon of hope and unwavering support for individuals who have encountered unfair obstacles in insurance claims, legal battles, and personal challenges. Our mission is clear: to level the playing field, ensuring that every person, regardless of their circumstances, can assert their rights and secure the justice they rightfully deserve.</p>
          </div>
        </div>
        
        {/* Why Choose us */}
        <div className="container-fluid bg-color-3 pt-5 pb-5">
          <div className="container">
            <h2 className="color-1 fw-bold text-center mb-3">Why Choose Us</h2>
            <p className='pb-3 text-center'>At ClaimSolution.in, we understand the frustration and helplessness that comes with facing unjust obstacles in insurance claims, legal disputes, and personal challenges. We are your advocate, your support, and your path to justice. Here's why you should choose us:</p>
            <div id="carouselExampleIndicators" className="carousel slide pb-5" data-bs-ride="true">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row row-cols-1 row-cols-md-3 g-3">
                    <div className="col">
                      <div className="card h-100 rounded-5 bg-color-4">
                        <img src="/Images/home/Insurance-Claim-Resolution.png" className="card-img-top p-3 rounded-5" alt="Insurance-Claim-Resolution" />
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Insurance Claim Resolution</h5>
                          <p className="card-text">Has your insurance claim been unjustly rejected? Is your voice being suppressed by your insurance company? At ClaimSolution.in, we specialize in helping policyholders like you secure the approvals you rightfully deserve. We are your beacon of hope when the insurance company's doors seem closed.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 rounded-5 bg-color-4">
                        <img src="/Images/home/Support-for-Victims-of-Sexual-Harassment.png" className="card-img-top p-3 rounded-5" alt="Insurance-Claim-Resolution" />
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Support for Victims of Sexual Harassment </h5>
                          <p className="card-text">We stand firmly with women who have faced the harrowing experience of sexual harassment. ClaimSolution.in not only offers unwavering emotional support but also provides the legal assistance necessary to seek justice. Your safety and well-being matter, and we are here to protect your rights. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 rounded-5 bg-color-4">
                        <img src="/Images/home/Farmers-Crop-Insurance-Advocate.png" className="card-img-top p-3 rounded-5" alt="Insurance-Claim-Resolution" />
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Farmers' Crop Insurance Advocate</h5>
                          <p className="card-text">Natural disasters can wreak havoc on a farmer's livelihood. When your farm is destroyed, and your insurance claim is wrongfully denied, turn to ClaimSolution.in. We specialize in helping farmers secure the claim amount they deserve under crop insurance schemes, ensuring that your hard work doesn't go in vain.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row row-cols-1 row-cols-md-3 g-3">
                    <div className="col">
                      <div className="card h-100 rounded-5 bg-color-4">
                        <img src="/Images/home/Protecting-Women's-Rights.png" className="card-img-top p-3 rounded-5" alt="Insurance-Claim-Resolution" />
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Protecting Women's Rights</h5>
                          <p className="card-text">For women who have endured physical and mental abuse, ClaimSolution.in offers a safe haven. Our legal services are tailored to protect your rights, providing you with the support you need to reclaim your life.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 rounded-5 bg-color-4">
                        <img src="/Images/home/Legal-Aid-for-the-Less-Privileged.png" className="card-img-top p-3 rounded-5" alt="Insurance-Claim-Resolution" />
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Legal Aid for the Less Privileged</h5>
                          <p className="card-text">We firmly believe that justice should be accessible to all, regardless of their economic status. ClaimSolution.in is committed to providing legal assistance to the underprivileged and marginalized sections of society, ensuring that their rights are upheld.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 rounded-5 bg-color-4">
                        <img src="/Images/home/Stolen-Car.png" className="card-img-top p-3 rounded-5" alt="Insurance-Claim-Resolution" />
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Stolen Car? Unsettled Claims? We've Got You Covered</h5>
                          <p className="card-text">Even when your car is stolen, and your insurance company refuses to settle your claim, ClaimSolution.in steps in. We're here to ensure that you receive the claim amount you're entitled to, helping you get back on the road. <br /><br /> <span className='color-4'>.</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row row-cols-1 row-cols-md-3 g-3 Slider-3">
                    <div className="col">
                      <div className="card h-100 rounded-5 bg-color-4">
                        <img src="/Images/home/Health-Claims-No-More-Rejections.png" className="card-img-top p-3 rounded-5" alt="Insurance-Claim-Resolution" />
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Health Claims - No More Rejections</h5>
                          <p className="card-text">When an insurance company denies you a cashless claim at the hospital and rejects your reimbursement claim, don't lose hope. ClaimSolution.in specializes in settling rejected health claims, ensuring that your medical expenses are covered when you need it the most. <br /><br /> <span className='color-4'>.</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Our Commitment to You */}
        <div className="container-fluid pt-3 bt-3">
          <div className="container">
            <div className="row">
              <h2 className="fw-bold text-center mt-4 mb-3">Our Commitment to You</h2>
              <div className="col-sm-12">                
              <p className='text-center pb-3'>At ClaimSolution.in, we are committed to standing by your side during life's most challenging moments. We believe that every individual deserves justice, support, and a fair chance to claim what is rightfully theirs. Our dedicated team of experts is here to navigate the complexities of the legal system, making it easier for you to move forward.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Claim your justice */}
        <div className="container-fluid bg-color-3 py-4">
            <div className="container">
                <div className="h2 fw-bold text-center py-3">Claim your justice with Us</div>
                <div className="row">
                    <div className="col-sm-6">
                        <img src="/Images/home/Claim-your-justice.png" alt="Claim-your-justice" className="img-fluid rounded-5"/>
                    </div>
                    <div className="col-sm-6">
                        <div className="fw-bold h4 mt-5 color-5">ClaimSolution.in - Championing Justice and Empowerment</div>
                        <p className="color-1 py-3">Welcome to ClaimSolution.in, a trailblazing platform dedicated to reshaping the landscape of justice and legal empowerment. We stand as a guiding light for individuals who have encountered unjust obstacles in insurance claims and legal battles. Our unwavering commitment is to level the playing field, ensuring that every person, regardless of their circumstances, can assert their rights and secure the justice they rightfully deserve.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Our Core Values */}
        <div className="container-fluid py-5">
            <div className="container">
                <div className="h2 fw-bold text-center">Our Core Values</div>
                <div class="row row-cols-1 row-cols-md-3 g-4 row-cols-lg-4">
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Claim Advocacy </h5>
                                <p class="card-text">We extend our hand to those who have been denied their rightful insurance claims. If you've faced rejection or undue delays, our mission is to stand alongside you to secure your rightful compensation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Championing Fairness </h5>
                                <p class="card-text">When insurance companies unjustly reject claims and refuse to listen to policyholders' pleas, we step in as your advocates, tirelessly fighting for your rights.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Enduring Support </h5>
                                <p class="card-text">We stand in solidarity with individuals who have endured both mental and physical harassment from insurance companies, providing them with a voice and a path to justice.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Property Justice </h5>
                                <p class="card-text">For those entangled in protracted property disputes, we offer unwavering support, helping navigate the complex legal terrain while ensuring your rights are upheld.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Civil Case Resilience </h5>
                                <p class="card-text">Whether you're navigating a divorce, a corporate dispute, or other civil matters, we're by your side, providing insights and strategies to navigate the intricate court proceedings.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Criminal Case Fortitude </h5>
                                <p class="card-text">We stand strong with individuals facing criminal cases, offering guidance in everything from legal battles to securing bail, ensuring a just and fair legal journey.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Farmers' Advocacy</h5>
                                <p class="card-text">We lend our support to farmers who have embraced crop insurance but are struggling to claim the compensation they're entitled to.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Empowering the Marginalized </h5>
                                <p class="card-text">Our commitment extends to empowering the underprivileged, ensuring that even the most vulnerable can access their legal rights.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Supporting Women </h5>
                                <p class="card-text">We offer unwavering assistance to women who have faced sexual harassment, empowering them to regain control of their lives and seek justice.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Accessible Legal Solutions </h5>
                                <p class="card-text">ClaimSolution.in aims to deliver superior legal services swiftly and affordably across the nation, ensuring even the least fortunate can exercise their legal rights.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card color-4 h-100">
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-center">Universal Empowerment </h5>
                                <p class="card-text">Our vision is to empower every individual, irrespective of financial resources or time constraints, with the best legal services available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Empowering Change, One Case at a Time */}
        <div className="container-fluid py-5 bg-color-2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="h2 fw-bold py-3 mt-3">Empowering Change, One Case at a Time</div>
                <p className="color-1">ClaimSolution.in is more than a company; it's a movement for justice and empowerment. We firmly believe that justice should be a fundamental right, not a privilege, and that everyone deserves a fair opportunity to assert their rights. With a dedicated team and unwavering commitment, we're here to guide you through the complexities of the legal system. </p>
              </div>
              <div className="col-12 col-md-6">
                <img src="/Images/home/Empowering-Change.png" alt="Empowering-Change" className="img-fluid rounded-5"/>
              </div>
            </div>
          </div>
        </div>

        {/* Reach out to us today  */}
        <div className="container-fluid py-5 bg-color-4">
          <div className="container">
            <div className="row">
              <div className="bg-color-3 card p-4">
                <div className="h2 text-center fw-bold pb-2">Reach out to us today </div>
                <p>embark on a journey towards justice, empowerment, and the realization of your legal rights. Together, we are rewriting the rules to make justice accessible for all. Claim your justice with ClaimSolution.in.</p>
              </div>
            </div>
          </div>
        </div>
    </>
    )
}