import { useEffect, useState,useNavigate } from "react"
import { allState } from "../../utils/constant"
import { getPartnerProfile } from "../../apis"
import {toast} from 'react-toastify'
import { API_BASE_IMG } from "../../apis"

export default function Profile() {
    const [data,setData] =useState([])
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
       async function fetch(){
        setLoading(true)
        try {
            const res = await getPartnerProfile()
            console.log("partner",res?.data?.data?.profile);
            if(res?.data?.success && res?.data?.data?.profile){

                setData([res?.data?.data?.profile])
                setLoading(false)
                
            }
    } catch (error) {
                if(error && error?.response?.data?.message){
                    toast.error(error?.response?.data?.message)
                }else{
                    toast.error("Something went wrong")
                }
            console.log("profile error",error);
        }
       }fetch() 
    },[])
    console.log(data);



    return (<>
        <div className="container-fluid color-4 p-0 bg-color-7">
            <div className="">
                
                <div>
                <div className="bg-color-5 d-flex color-1 py-1 justify-content-center"><h2>Personal Details</h2></div>
                <div className="d-flex flex-row-reverse color-1 p-2 "><button className="btn btn-primary" onClick={()=>navigate("/partner/edit profile")}>Edit Profile</button></div>
                    <div className="p-5">
                        <div className="d-flex justify-content-center my-5" >
                            <img src={data[0]?.profilePhoto ? `${API_BASE_IMG}/${data[0]?.profilePhoto}`: "/Images/home/ClaimSolution-banner.jpg"} className="" style={{width:150,height:150,borderRadius:150}} alt="image" />
                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            <h6 className="fw-bold">Consultant Name</h6>
                           <p className=" h5 text-capitalize">{data[0]?.consultantName}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <h6 className="fw-bold">Consultant Code</h6>
                           <p className=" h5 text-capitalize">{data[0]?.consultantCode}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <h6 className="fw-bold">Primery Email Id</h6>
                           <p className=" h5 ">{data[0]?.primaryEmail}</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Alternet Email Id</label> */}
                            <h6 className="fw-bold">Alternet Email Id</h6>
                           <p className=" h5 ">{data[0]?.alternateEmail}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Associate with us</label> */}
                            <h6 className="fw-bold">Associate with us</h6>
                           <p className=" h5 text-capitalize">{ data[0]?.associateWithUs ? new Date(data[0]?.associateWithUs).toLocaleDateString() : "/Na"}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Primery Mobile No</label> */}
                            <h6 className="fw-bold">Primery Mobile No</h6>
                           <p className=" h5 text-capitalize">{data[0]?.primaryMobileNo}</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Primery Mobile No</label> */}
                            <h6 className="fw-bold">Alternative Mobile No</h6>
                           <p className=" h5 text-capitalize">{data[0]?.alternateMobileNo}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Whatsup No</label> */}
                            <h6 className="fw-bold">Whatsup No</h6>
                           <p className=" h5 text-capitalize">{data[0]?.whatsupNo}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">PAN No</label> */}
                            <h6 className="fw-bold">PAN No</h6>
                           <p className=" h5 text-capitalize">{data[0]?.panNo}</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Aadhaar No</label> */}
                            <h6 className="fw-bold">Aadhaar No</h6>
                           <p className=" h5 text-capitalize">{data[0]?.aadhaarNo}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">DOB</label> */}
                            <h6 className="fw-bold">DOB</h6>
                           <p className=" h5 text-capitalize">{data[0]?.dob ? new Date(data[0]?.dob) : "/Na"}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Gender</label> */}
                            <h6 className="fw-bold">Gender</h6>
                           <p className=" h5 text-capitalize">{data[0]?.gender}</p>
                        </div>

                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Bussness Name (Optional)</label> */}
                            <h6 className="fw-bold">Bussness Name </h6>
                           <p className=" h5 text-capitalize">{data[0]?.businessName}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Company Name (optional)</label>   */}
                            <h6 className="fw-bold">Company Name</h6>
                           <p className=" h5 text-capitalize">{data[0]?.companyName}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Nature of Busness</label> */}
                            <h6 className="fw-bold">Nature of Busness</h6>
                           <p className=" h5 text-capitalize">{data[0]?.natureOfBusiness}</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Your Designation</label> */}
                            <h6 className="fw-bold">Your Designation</h6>
                           <p className=" h5 text-capitalize">{data[0]?.designation}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Your are of Operation</label> */}
                            <h6 className="fw-bold">Your are of Operation</h6>
                           <p className=" h5 text-capitalize">{data[0]?.areaOfOperation}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="state" className="form-label">State</label> */}
                            <h6 className="fw-bold">State</h6>
                           <p className=" h5 text-capitalize">{data[0]?.state}</p>
                        </div>
                       
                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">District</label> */}
                            <h6 className="fw-bold">District</h6>
                           <p className=" h5 text-capitalize">{data[0]?.district}</p>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            {/* <label for="mobileNo." className="form-label">Your City</label> */}
                            <h6 className="fw-bold">City</h6>
                           <p className=" h5 text-capitalize">{data[0]?.city}</p>
                        </div>
                        <div className="mb-3 col-12">
                            {/* <label for="mobileNo." className="form-label">About you</label> */}
                            <h6 className="fw-bold">Pin Code</h6>
                           <p className=" h5 text-capitalize">{data[0]?.pinCode}</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12">
                            {/* <label for="mobileNo." className="form-label">About you</label> */}
                            <h6 className="fw-bold">Your self</h6>
                           <p className=" h5 text-capitalize">{data[0]?.about}</p>
                        </div>
                        </div>
                        {/* <div className="d-flex  justify-content-center">
                        <div className="btn btn-primary w-50">Save</div>
                        </div> */}

                    </div>

                </div>
            </div>
        </div>
    </>)
}