import { Link } from 'react-router-dom'
export default function Home(){
    return(
      <>
        {/* home banner */}
        <div className="container-fluid p-0">
          <img src="/Images/home/home-banner.png" alt="" className='img-fluid w-100' />
        </div>
        {/* First part */}
        <div className="container-fluid mb-3 pt-5">
          <div className="container-px-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="h1 fw-bold"> 
                  <p>Welcome to Claimsolution.in, your trusted online platform</p>
                  <div className="bg-color-2 btn m-1 p-3 mt-3 rounded-5">
                      <Link to="#" className="color-1">Register Complaint</Link>
                  </div>
                  <div className="bg-color-2 btn m-1 p-3 mt-3 rounded-5">
                      <Link to="tel: 95136-31312" className="color-1">95136-31312</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <img src="/Images/home/ClaimSolution-banner.jpg" alt="" className="img-fluid mb-3" />
              </div>
            </div>
          </div>
        </div>
        {/* About us para */}
        <div className="container-fluid bg-color-3 pt-3 pb-3">
          <div className="container-px-5">
            <div className="h2 fw-bold pt-4 pb-3 text-center">About us</div>
              <p>Dedicated to simplifying the insurance claims process. We understand the frustrations that policyholders often encounter when their insurance claims are unfairly rejected or left unresolved. That's where we step in.
              <br /><br />
              Our professional team brings a wealth of expertise to the table, offering a lifeline to individuals who are rightfully seeking the compensation they deserve. Your satisfaction is at the heart of our mission.
              <br /><br />
              Explore our range of services and discover how we can assist you in addressing your insurance claim concerns. At Claimsolution.in, we are committed to ensuring your peace of mind and providing the support you need in the often complex world of insurance claims.</p>
          </div>
        </div>
        {/* Our Services */}
        <div className="container-fluid pt-5 pb-3 mb-3">
          <div className="container-px-5">
            <div className="h2 text-center fw-bold">Our Services</div>
            <div className="text-center">We empower individuals to demand justice and hold those who wronged or mistreated them accountable. Explore the range of services we offer to take action and fight for your rights.</div>
            <ul className="nav nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
              <li className="nav-item " role="presentation">
                <button className="nav-link active " id="pills-health-tab" data-bs-toggle="pill" data-bs-target="#pills-health" type="button" role="tab" aria-controls="pills-health" aria-selected="true">
                <img src="/Images/icons/healthcare.png" alt="" className='btn-icon' />
                  <br />Health insurance claim solution
                </button>
              </li>
              <li className="nav-item " role="presentation">
                <button className="nav-link" id="pills-motor-tab" data-bs-toggle="pill" data-bs-target="#pills-motor" type="button" role="tab" aria-controls="pills-motor" aria-selected="false">
                <img src="/Images/icons/car-insurance.png" alt="" className='btn-icon' />
                  <br />Motor insurance claim solution
                </button>
              </li>
              <li className="nav-item " role="presentation">
                <button className="nav-link" id="pills-death-tab" data-bs-toggle="pill" data-bs-target="#pills-death" type="button" role="tab" aria-controls="pills-death" aria-selected="false">
                <img src="/Images/icons/life-insurance.png" alt="" className='btn-icon' />
                  <br />Death claim solution
                </button>
              </li>
              <li className="nav-item " role="presentation">
                <button className="nav-link" id="pills-insurance-tab" data-bs-toggle="pill" data-bs-target="#pills-insurance" type="button" role="tab" aria-controls="pills-insurance" aria-selected="false">
                <img src="/Images/icons/insurance.png" alt="" className='btn-icon' />
                  <br />Any insurance claim solution
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active alert bg-color-4 border" id="pills-health" role="tabpanel" aria-labelledby="pills-health-tab" tabindex="0">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img src="/Images/Health-Insurance.jpg" alt="" className="w-100" />
                  </div>
                  <div className="col-12 col-md-6">
                    <h2 className='pt-4 pb-2'>Health Insurance Claim Solution</h2>
                    <p>Health Claim Solution: In India, health and mediclaim insurance claims can be rejected for various reasons. Some common rejection reasons include misrepresentation or non-disclosure, exclusions, waiting periods, sub-limits, and more. Claimsolution.in has a team of experienced Health Claim experts who can help you get your rejected health claim approved through the proper channels. Register your complaint today to get the compensation you deserve.</p>
                    <Link to="/Health-insurance-claim-solution" className="bg-color-2 btn rounded-2 color-1">Know more </Link>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade alert bg-color-4 border" id="pills-motor" role="tabpanel" aria-labelledby="pills-motor-tab" tabindex="0">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img src="/Images/Motor-Insurance-Claim-Solution.png" alt="" className="w-100" />
                  </div>
                  <div className="col-12 col-md-6">
                    <h2 className='pt-4 pb-2'>Motor Insurance Claim Solution</h2>
                    <p> Motor Claim Solution: Motor or car insurance claims in India can be rejected for reasons such as non-disclosure, driving without a valid license, and policy lapses. Our experienced Motor Claim experts can help you navigate the process and get your rejected motor or car insurance claim approved. Register your complaint today for a solution.</p>
                    <Link to="/Health-insurance-claim-solution" className="bg-color-2 btn rounded-2 color-1">Know more </Link>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade alert bg-color-4 border" id="pills-death" role="tabpanel" aria-labelledby="pills-death-tab" tabindex="0">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img src="/Images/Death-Claim-Solution.png" alt="" className="w-100" />
                  </div>
                  <div className="col-12 col-md-6">
                    <h2 className='pt-4 pb-2'>Death Claim Solution</h2>
                    <p>Death or Accident Claim Solution: Death or accident insurance claims can be rejected for various reasons, including non-disclosure, policy lapses, exclusions, and more. Our Death or Accident Claim experts are here to assist you in getting your rejected claims approved through the proper channels. Register your complaint today to ensure you receive the compensation you deserve.</p>
                    <Link to="/Death-Claim-Solution" className="bg-color-2 btn rounded-2 color-1">Know more </Link>
                  </div>
                </div>   
              </div>
              <div className="tab-pane fade alert bg-color-4 border" id="pills-insurance" role="tabpanel" aria-labelledby="pills-insurance-tab" tabindex="0">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img src="/Images/Any-Insurance-Claim-Solution.png" alt="" className="w-100" />
                  </div>
                  <div className="col-12 col-md-6">
                    <h2 className='pt-4 pb-2'>Any Insurance Claim Solution</h2>
                    <p> Any Insurance Claim Solution: Insurance claims can be rejected for a wide range of reasons, including non-disclosure, policy lapses, and non-cooperation. Our expert team can help you navigate these challenges and get your insurance claim approved. Register your complaint today to get the support you need.</p>
                    <Link to="/Any-Insurance-Claim-Solution" className="bg-color-2 btn rounded-2 color-1">Know more </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose us */}
        <div className="container-fluid bg-color-3 pt-5 pb-5">
          <div className="container-px-5">
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
        <div className="container-fluid bg-color-4 pt-3 bt-3">
          <div className="container-px-5">
            <div className="row">
              <h2 className="fw-bold text-center mt-4 mb-3">Our Commitment to You</h2>
              <div className="col-sm-12">                
              <p className='text-center pb-3'>At ClaimSolution.in, we are committed to standing by your side during life's most challenging moments. We believe that every individual deserves justice, support, and a fair chance to claim what is rightfully theirs. Our dedicated team of experts is here to navigate the complexities of the legal system, making it easier for you to move forward.</p>
              </div>
              {/* <div className="col-sm-6">
                <img src="/Images/home/our-Commitment.png" alt="" className='img-fluid'/>
              </div> */}
            </div>
          </div>
        </div>
        {/* Our blogs */}
        <div className="container-fluid bg-color-3 pt-3 pb-5">
          <div className="container-px-5 mt-5 mb-3">
            <div className="h2 fw-bold text-center">Our blogs</div>
            <div className="color-1">
              <p className='text-center'> Stay informed and educated about insurance-related topics through our blogs. Our articles cover a variety of subjects, from insurance tips and industry news to customer experiences and success stories. Explore our blog section to enhance your understanding of the insurance world.</p>
              <div className="row mt-4">
                <div className="col-12 col-md-4 pb-4">
                  <div className="card h-100 rounded-5 bg-color-4">
                    <img src="/Images/home/coming-soon.png" className="card-img-top p-3 rounded-5" alt="Insurance-Claim-Resolution" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold"> blog title </h5>
                      <p className="card-text"> Lorem ipsum odor amet, consectetuer adipiscing elit. Primis ornare arcu vitae. Dis sed. Natoque ante duis. Eu turpis porttitor. Est vivamus. Aenean adipiscing himenaeos cubilia. Metus vulputate massa. Ex maximus dignissim tellus. Nunc blandit. </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 pb-4">
                  <div className="card h-100 rounded-5 bg-color-4">
                    <img src="/Images/home/coming-soon.png" className="card-img-top p-3 rounded-5" alt="Insurance-Claim-Resolution" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold"> blog title </h5>
                      <p className="card-text"> Lorem ipsum odor amet, consectetuer adipiscing elit. Primis ornare arcu vitae. Dis sed. Natoque ante duis. Eu turpis porttitor. Est vivamus. Aenean adipiscing himenaeos cubilia. Metus vulputate massa. Ex maximus dignissim tellus. Nunc blandit. </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 pb-4">
                  <div className="card h-100 rounded-5 bg-color-4">
                    <img src="/Images/home/coming-soon.png" className="card-img-top p-3 rounded-5" alt="Insurance-Claim-Resolution" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold"> blog title </h5>
                      <p className="card-text"> Lorem ipsum odor amet, consectetuer adipiscing elit. Primis ornare arcu vitae. Dis sed. Natoque ante duis. Eu turpis porttitor. Est vivamus. Aenean adipiscing himenaeos cubilia. Metus vulputate massa. Ex maximus dignissim tellus. Nunc blandit. </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/blogs" className="color-1"> 
                <div className="btn-outline-light m-3 color-5 float-end"> view all</div> 
              </Link>
            </div>
          </div>
        </div>
        {/* Career */}
        <div className="container-fluid bg-color-2  pt-3 pb-3">
          <div className="container-px-5 mt-3">
            <div className="h2 fw-bold text-center mb-4 mt-4">Career</div>
            <div className="row">
              <div className="col-sm-6">
                <img src="/Images/home/career.jpg" alt="career" className='img-fluid rounded-5' />
              </div>
              <div className="col-sm-6">
                <div className="color-1">
                  <p className='lh-lg mt-5'> Join Our ClaimSolution.in Family! We're more than just a company; we're a family. At ClaimSolution.in, we believe in empowering our employees to become leaders in their respective roles and contribute to our mission of providing comprehensive insurance solutions to our customers. Join our dynamic and innovative team at the forefront of the insurance industry. We foster a culture of inclusivity, growth, and development, where everyone can learn, grow, and thrive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Us */}
        <div className="container-fluid pt-3 pb-5">
          <div className="container-px-5 mt-3">
            <div className="h2 fw-bold text-center">Contact Us</div>
            <div className="row">
              <div className="col-sm-6">
                <div className="mapouter">
                  <div className="gmap_canvas">
                  <iframe class="gmap_iframe" width="100%" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=Bhavishya Apartment, Nai Basti Road, Deoli, South Delhi - 110080, India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <a href="https://connectionsgame.org/">Connections Unlimited</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="color-1">
                  <p className='lh-lg mt-5'> 
                  <i class="bi bi-tag"></i> claimsolution.in <br />
                  <i class="bi bi-building"></i> Adakiya Consultancy Services Pvt. Ltd <br />
                  <i class="bi bi-geo-alt"></i> A-3, Kh No -150, Bhavishya Apartment, Nai Basti Road, Deoli, South Delhi - 110080, India<br />
                  <i class="bi bi-envelope"></i> help@claimsolution.in <br /> 
                  <i class="bi bi-telephone"></i> 9717282825 <br />
                  <i class="bi bi-whatsapp"></i> 9205530811 <br />
                  <i class="bi bi-link-45deg"></i> www.claimsolution.in <br />
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </>
)
}