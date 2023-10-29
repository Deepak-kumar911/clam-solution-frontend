import { Link, useNavigate } from "react-router-dom"
import { partnerType } from "../../utils/constant"
import { useState } from "react"
import { AppContext } from "../../App"
import { useContext } from "react"
import { signUp } from "../../apis"
import {toast} from 'react-toastify'
import { setToken } from "../../utils/helperFunction"


export default function SignUp() {
    const state = useContext(AppContext)
   const [data,setData] =useState({fullName:"",email:"",mobileNo:"",workAssociation:"",areaOfOperation:""})
   const [disable,setDisable] = useState(false)
   const navigate = useNavigate()

   const handleOnchange =(e)=>{
    const {name,value}= e.target
       setData({...data,[name]:value})
   }


   const handleSumbit =async (e)=>{
    e.preventDefault()
    setDisable(true)
    try {
        const res = await signUp(data)
        if(res?.data?.success){
            const token =  res?.headers["x-auth-token"]
            if(token){
                 setToken(token)
                toast.success(res?.data?.message)
                navigate("/partner/otp verify")
                console.log("sign up");
                console.log("sign up",res);
            }
            setDisable(false)
        }
} catch (error) {
            if(error && error?.response?.data?.message){
                toast.error(error?.response?.data?.message)
            }else{
                toast.error("Something went wrong")
            }
        console.log("signup error",error);
    setDisable(false)
    }
   }

    return (<>
        <div className="container-fluid mt-5 mb-5">
            <div className="contanter row">
                <div className="col-12 col-md-6">
                    <img src="/Images/home/sign-up.png" className="rounded-3 "  alt="signup" />
                </div>
                <div className="col-12 col-md-6">
                    <div className="bg-color-7 card color-4 mx-auto my-3 p-5 rounded-5 w-75">
                    <h1 className="text-center">Sign Up</h1>
                    <div className="form w-100">
                        <div className="mb-3">
                            <input type="text" name="fullName" value={data.fullName} onChange={handleOnchange}  className="form-control" placeholder="Your FullName" id="name" aria-describedby="nameHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="email" name="email" value={data.email} onChange={handleOnchange} className="form-control" placeholder="Email Id" id="email" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            {/* <label for="mobileNo." className="form-label">Phone No.</label> */}
                            <input type="number" name="mobileNo" value={data.mobileNo} onChange={handleOnchange} className="form-control" placeholder="Phone No." id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3">
                            <select className="form-select" name="workAssociation" value={data.workAssociation} onChange={handleOnchange} aria-label="Default select example">
                                <option>--select Partner Type</option>
                                {partnerType?.map(partner=><option key={partner} value={partner}>{partner}</option>)}
                            </select>
                        </div>
                        <div className="mb-3">
                            <input type="text" name="areaOfOperation" value={data.areaOfOperation} onChange={handleOnchange} className="form-control" placeholder="Area of Operation" id="areaOfOperation" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-5">
                        <button type="submit" aria-disabled={disable} onClick={handleSumbit} className={disable ? "btn btn-primary disabled w-100" : "btn btn-primary w-100"}>SignUp</button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <Link to="/partner/signin">Already have account? signin</Link>
                        </div>
                    </div>

                    </div>
                    
                </div>
            </div>
        </div>

    </>)
}