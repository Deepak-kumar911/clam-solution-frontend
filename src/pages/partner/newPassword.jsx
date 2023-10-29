import { useState } from "react"
import { genrateNewPassword } from "../../apis"
import { useNavigate } from "react-router-dom"
import { setToken,getJwtDecode } from "../../utils/helperFunction"
import { AppContext } from "../../App"
import { useContext } from "react"
import {toast} from 'react-toastify'
import { setheader } from "../../apis"

export default function NewPassword(){
    const state = useContext(AppContext)
    const [data,setData] = useState({password:"",confirmPassword:""})
    const [disable,setDisable] = useState(false)
    const navigate = useNavigate()

    const handleOnchange =(e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }
    
    const handleSumbit =async (e)=>{
      e.preventDefault()
      setDisable(true)
      try {
          const res = await genrateNewPassword(data)
          console.log("res",res);
          if(res?.data?.success){
            const token =  res?.headers["x-auth-token"]
            if(token){
                setToken(token)
                const details = getJwtDecode(token)
                console.log("details",details);
                if(details?.isLogin){
                    state?.setMyAppData({isLogin:true,details:details})
                }
                toast.success(res?.data?.message)
                setheader()
                // navigate("/partner/dashboard")
                navigate("/partner/profile")
                console.log("genrate password",res);
            }
            setDisable(false)
        }
  } catch (error) {
              if(error && error?.response?.data?.message){
                  toast.error(error?.response?.data?.message)
              }else{
                  toast.error("Something went wrong")
              }
          console.log("genrate password error",error);
      setDisable(false)
      }
    }

    return(<>
            <div className="container-fluid mt-5 mb-5">
            <div className="contanter row">
                <div className="col-12 col-md-6">
                <img src="/Images/home/generate-password.png" className="rounded-3 "  alt="signup" />
                </div>
                <div className="col-12 col-md-6">
                <div className="bg-color-7 card color-4 mx-auto p-5  rounded-5 w-75">
                    <h1 className="text-center">Generate Password</h1>
                    <div className="form w-100">
                        <div className="mb-3">
                            {/* <label for="email" className="form-label">New password</label> */}
                            <input type="password" className="form-control"  name="password" value={data.password} onChange={handleOnchange} placeholder="New Password" id="email" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            {/* <label for="password" className="form-label">Confirm password</label> */}
                            <input type="password" className="form-control" name="confirmPassword" value={data.confirmPassword} onChange={handleOnchange} placeholder="Confirm Password" id="password" aria-describedby="passwordHelp" />
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                        <button type="submit" aria-disabled={disable} onClick={handleSumbit} className={disable ? "btn btn-primary disabled w-100" : "btn btn-primary w-100"}>Genrate Password</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>)
}