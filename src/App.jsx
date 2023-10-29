import {Route,Routes} from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import { getToken,getJwtDecode } from './utils/helperFunction'


import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Health_Insurance from './pages/Services/Health_Insurance'
import Any_Insurance_Claim_Solution from './pages/Services/Any_Insurance_Claim_Solution'
import Death_Claim_Solution from './pages/Services/Death_Claim_Solution'
import Motor_Insurance_Claim_Solution from './pages/Services/Motor_Insurance_Claim_Solution'



// import Navbar from './components/Common/Navabar'
import Footer from './components/Common/Footer'
import Blogs from './pages/blogs'
import Career from './pages/career'
import Patnership from './pages/Patnership'
import Policy from './pages/policy'
// import Navbar2 from './components/Common/Navabar2'



// for partner
import SignUp from './pages/partner/signUp'
import SignIn from './pages/partner/signIn'
import OtpVerify from './pages/partner/otpVerify'
import NewPassword from './pages/partner/newPassword'
import Dashboard from './pages/partner/dashboard'
import Profile from './pages/partner/profile'
import BankDetails from './pages/partner/bankDetails'
import NewCase from './pages/partner/Case/newCase'
import EditProfile from './pages/partner/editProfile'


import PublicTemplate from './template/publicTemplate'
import PartnerTemplate from './template/partnerTemplate'


export const AppContext = createContext("")


export default function App(){
  const [myAppData,setMyAppData] = useState({isLogin:false,details:""})


  useEffect(()=>{
    const token = getToken()
    if(token){
        const details = getJwtDecode(token)
        setMyAppData({isLogin:true,details:details})
    }
  },[])

  console.log("myapp",myAppData);

  return(<>
  <AppContext.Provider value={{myAppData,setMyAppData}}>
  <Routes>
    <Route path='/' element={<PublicTemplate><Home/></PublicTemplate>}/>
    <Route path='/about-us' element={<PublicTemplate><About/></PublicTemplate>}/>
    <Route path='/contact-us' element={<PublicTemplate><Contact/></PublicTemplate>}/>
    <Route path='/Health-insurance-claim-solution' element={<PublicTemplate><Health_Insurance/></PublicTemplate>}/>
    <Route path='/Any-Insurance-Claim-Solution' element={<PublicTemplate><Any_Insurance_Claim_Solution/></PublicTemplate>}/>
    <Route path='/Death-Claim-Solution' element={<PublicTemplate><Death_Claim_Solution/></PublicTemplate> }/>
    <Route path='/Motor-Insurance-Claim-Solution' element={<PublicTemplate><Motor_Insurance_Claim_Solution/></PublicTemplate>}/>
    <Route path='/blogs' element={<PublicTemplate><Blogs/></PublicTemplate>}/>
    <Route path='/career' element={<PublicTemplate><Career/></PublicTemplate>} />
    <Route path='/patnership' element={<PublicTemplate><Patnership/></PublicTemplate>} />
    <Route path='/policy' element={<PublicTemplate><Policy/></PublicTemplate>} />

    {/* for partner */}
    <Route path='/partner/signin' element={<PublicTemplate><SignIn/></PublicTemplate>}/>
  <Route path='/partner/signup' element={<PublicTemplate><SignUp/></PublicTemplate>}/>
  <Route path='/partner/otp verify' element={<PublicTemplate><OtpVerify/></PublicTemplate>}/>
  <Route path='/partner/new password' element={<PublicTemplate><NewPassword/></PublicTemplate>}/>
  <Route path='/partner/dashboard' element={<PartnerTemplate><Dashboard/></PartnerTemplate>}/>
  <Route path='/partner/profile' element={<PartnerTemplate><Profile/></PartnerTemplate>}/>
  <Route path='/partner/edit profile' element={<PartnerTemplate><EditProfile/></PartnerTemplate>}/>
  <Route path='/partner/banking details' element={<PartnerTemplate><BankDetails/></PartnerTemplate>}/>
  <Route path='/partner/add new case' element={<PartnerTemplate><NewCase/></PartnerTemplate>}/>



    <Route path='*' element={<Error/>}/>
  </Routes>
  </AppContext.Provider>
  </>)
}