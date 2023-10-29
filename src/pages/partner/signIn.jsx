import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signin } from "../../apis"
import { setheader } from "../../apis"
import { setToken,getJwtDecode } from "../../utils/helperFunction"
import {toast} from 'react-toastify'
import { AppContext } from "../../App"
import { useContext } from "react"

export default function SignIn(){
    const [data,setData] =useState({email:"",password:""})
    const [disable,setDisable] = useState(false)
    const navigate = useNavigate()
    const state = useContext(AppContext)

    const hangleOnchange= (e)=>{
        const {name,value}= e.target;
        setData({...data,[name]:value})
    }

    const handleSumbit =async (e)=>{
        e.preventDefault()
        setDisable(true)
        try {
            const res = await signin(data)
            console.log("/partner/dashboard",res);
            if(res?.data?.success){
                const token =  res?.headers["x-auth-token"]
                if(token){
                    setheader()
                    setToken(token)
                    const details = getJwtDecode(token)
                    console.log("details",details);
                    if(details?.isLogin){
                        state?.setMyAppData({isLogin:true,details:details})
                        // navigate("/partner/dashboard");
                        navigate("/partner/profile")
                        toast.success(res?.data?.message)
                        console.log("navigate","/partner/dashboard");
                    }

                }
                setDisable(false)
            }
            setDisable(false)
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
    return(<>
        <div className="">
            <div className="row py-3">
                <div className="col-12 col-md-6">
                <img src="/Images/home/sign-in.png"  className="rounded-3"  alt="signup" />
                </div>
                <div className="col-12 col-md-6 p-0">
                    <div className="bg-color-7 card color-4 mx-auto p-5  rounded-5 w-75">
                    <h1 className="text-center mb-2">Sign In</h1>
                    <div className="">
                        <div className="my-3">
                            {/* <label for="email" className="form-label">Email</label> */}
                            <input type="email" name="email" value={data.email} onChange={hangleOnchange} className="form-control" placeholder="Your Email" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            {/* <label for="password" className="form-label">Password</label> */}
                            <input type="password" name="password" value={data.password} onChange={hangleOnchange}  className="form-control" placeholder="Your Password" id="password" aria-describedby="passwordHelp" />
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                        <button type="submit" aria-disabled={disable} onClick={handleSumbit} className={disable ? "btn btn-primary disabled w-100" : "btn btn-primary w-100"}>SignIn</button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <Link to="/partner/signup">Don't have account? signup</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}