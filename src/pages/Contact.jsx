export default function Contact(){
    return(
    <>
      {/* Contact Us */}
      <div className="container-fluid pt-3 pb-5">
        <div className="container mt-3">
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