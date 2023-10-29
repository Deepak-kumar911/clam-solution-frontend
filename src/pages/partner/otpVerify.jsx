import OtpInput from 'react-otp-input';
import {useState} from 'react'
import { verifyOtp } from '../../apis';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export default function OtpVerify() {
    const [otp, setOtp] = useState('');
    const [disable,setDisable] = useState(false)
    const navigate = useNavigate()

    const handleVerify = async (e)=>{
        e.preventDefault()
        setDisable(true)
        try {
            const res = await verifyOtp({otp:otp})
            console.log("res",res);
            if(res?.data?.success){
                    toast.success(res?.data?.message)
                    navigate("/partner/new password")
                    console.log("sign up");
                    console.log("sign up",res);
                setDisable(false)
            }
    } catch (error) {
                if(error && error?.response?.data?.message){
                    toast.error(error?.response?.data?.message)
                }else{
                    toast.error("Something went wrong")
                }
            console.log("verify opt error",error);
        setDisable(false)
        }
        console.log("otp",otp);
    }
    return (<>
        <div className="container-fluid mt-5 mb-5">
            <div className="contanter row">
                <div className="col-12 col-md-6">
                <img src="/Images/home/otp.png"  className="rounded-3"  alt="signup" />
                </div>
                <div className="col-12 col-md-6">
                    <div className='bg-color-7 card color-4 mx-auto p-5  rounded-5 w-50'>
                    <h2 className='text-center'>OTP Verification</h2>
                    <div className="form w-100">
                        <div className="mb-3">
                            <OtpInput
                                shouldAutoFocus={true}
                                inputType="tel"
                                value={otp}
                                onChange={(otp)=>setOtp(otp)}
                                numInputs={6}
                                containerStyle="d-flex justify-content-center gap-2"
                                inputStyle="otp-input"
                                renderSeparator={<span> </span>}
                                renderInput={(props) => <input {...props}/>}
                            />
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                        <button type="submit" aria-disabled={disable} onClick={handleVerify} className={disable ? "btn btn-primary disabled w-100" : "btn btn-primary w-100"}>Verify OTP</button>
                        </div>
             
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}