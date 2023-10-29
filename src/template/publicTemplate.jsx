// import Navbar from "../components/Common/Navabar"
import Navbar2 from "../components/Common/Navabar2"
import Footer from "../components/Common/Footer"

export default function PublicTemplate({children}){
    return(<>
       <div className="container-fluid p-0">
         <Navbar2/>
         <div className=''>
         {children}
         </div>
         <Footer/>
            </div>
    </>)
}