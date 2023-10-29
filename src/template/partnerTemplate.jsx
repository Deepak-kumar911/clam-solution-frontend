import PrivateNavbar from "../components/Common/privateNavbar"
import { AppContext } from "../App"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getToken,getJwtDecode } from "../utils/helperFunction"


export default function PartnerTemplate({children}){
    const state = useContext(AppContext)
    const navigate= useNavigate()
    console.log("my state",state);

    useEffect(()=>{
        const token = getToken()
        if(token){
            const details = getJwtDecode(token)
            console.log(details);
            if(details?.isLogin){

            }else{
                navigate("/partner/signin")
            }
            // setM 
        }else{
            navigate("/partner/signin")
        }
        // console.log("template",state?.myAppData);
        //   if(!state?.myAppData?.isLogin){
        //     }
    },[state])
    return(<>
       <div className="container-fluid">
            <div className="contanter row">
                <div className="col-2 p-0 bg-color-4"><PrivateNavbar/></div>
                <div className="col-10 p-0 bg-color-1">{children}</div>
            </div>
            </div>
    </>)
}