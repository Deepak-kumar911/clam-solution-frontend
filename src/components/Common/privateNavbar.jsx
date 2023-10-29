import {RxDashboard} from 'react-icons/rx'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {RiBankLine} from 'react-icons/ri'
import {SiReaddotcv} from 'react-icons/si'
import {MdOutlineLibraryAdd} from 'react-icons/md'
import {IoLogOutOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import { useContext } from 'react'
import { deleteToken } from '../../utils/helperFunction'

export default function PrivateNavbar(){
  const state = useContext(AppContext)

 const handleLogout =()=>{
    deleteToken()
    state?.setMyAppData({isLogin:false,details:""})
 }

    return(<>
<div className="h-100 d-flex flex-column gap-2 py-4 color-4">
    {/* <Link to="/partner/dashboard" className="d-flex align-items-center mx-2 px-2 py-2 gap-3  bg-color-1 rounded-1 menu-item"  >
        <RxDashboard/>
        <div className=''>Dashoard</div>
    </Link> */}
    <Link to="/partner/profile" className="d-flex align-items-center mx-2 px-2 py-2 gap-3 bg-color-1 rounded-1 menu-item" >
        <BsFillPersonLinesFill/>
        <div className=''>Profile</div>
    </Link>
    <Link to="/partner/banking details" className="d-flex align-items-center mx-2 px-2 py-2 gap-3 bg-color-1 rounded-1 menu-item" >
        <RiBankLine/>
        <div className=''>Banking Details</div>
    </Link>
    <Link tp="/" className="d-flex align-items-center mx-2 px-2 py-2 gap-3 bg-color-1 rounded-1 menu-item" >
        <SiReaddotcv/>
        <div className=''>All Case</div>
    </Link>
    <Link to="/partner/add new case" className="d-flex align-items-center mx-2 px-2 py-2 gap-3 bg-color-1 rounded-1 menu-item" >
        <MdOutlineLibraryAdd/>
        <div className=''>Add Case</div>
    </Link>
    <Link onClick={handleLogout}  className="d-flex align-items-center mx-2 px-2 py-2 gap-3 bg-color-1 rounded-1 menu-item" >
        <IoLogOutOutline/>
        <div className=''>Logout</div>
    </Link>
</div>

    </>)
}