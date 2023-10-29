import { allState } from "../../utils/constant"
import "react-image-upload/dist/index.css";
import ImageUploader from "react-image-upload";
import { useState,useEffect,useNavigate } from "react";
import { getPartnerProfile } from "../../apis";

export default function EditProfile() {
    const [data,setData] =useState({
        profilePhoto: "",
        consultantName: "",
        consultantCode: "",
        associateWithUs: "",
        primaryEmail: "",
        alternateEmail: "",
        primaryMobileNo: "",
        alternateMobileNo: "",
        whatsupNo: "",
        panNo: "",
        aadhaarNo: "",
        dob: "",
        gender: "",
        businessName: "",
        companyName: "",
        natureOfBusiness: "",
        designation: "",
        areaOfOperation: "",
        state: "",
        district: "",
        city: "",
        pinCode: "",
        about: ""
    })
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()


    useEffect(()=>{
       async function fetch(){
        setLoading(true)
        try {
            const res = await getPartnerProfile()
            console.log("partner",res?.data?.data?.profile);
            if(res?.data?.success && res?.data?.data?.profile){

                setData({...res?.data?.data?.profile})
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



    function getImageFileObject(imageFile) {
        console.log({ onAdd: imageFile });
    }
    function runAfterImageDelete(file) {
        console.log({ onDele: file });
    }

    return (<>
        <div className="container-fluid color-4 p-0 bg-color-7">
            <div className="contanter row ">
                <div>
                <div className="bg-color-5 d-flex color-1 py-1 justify-content-center"><h2>Personal Details</h2></div>
                    <div className="form row p-5">
                        <div className="d-flex justify-content-center my-5">
                            <ImageUploader
                                id="chequeImg"
                                onFileAdded={(img) => getImageFileObject(img)} // function that runs to confirm that your image actually exists
                                onFileRemoved={(img) => runAfterImageDelete(img)} // function runs on once you delete your image
                                style={{ height: 150, width: 150, borderRadius:150 }}
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="name" className="form-label">Consultant Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                            {/* <div id="nameHelp" className="form-text text-danger">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="email" className="form-label">Consultant Code</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Primery Email Id</label>
                            <input type="email" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Alternet Email Id</label>
                            <input type="email" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Associate with us</label>
                            <input type="date" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Primery Mobile No</label>
                            <input type="number" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Whatsup No</label>
                            <input type="number" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">PAN No</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Aadhaar No</label>
                            <input type="number" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">DOB</label>
                            <input type="date" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Gender</label>
                            <select className="form-select" id="state" aria-label="Default select example">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Bussness Name (Optional)</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Company Name (optional)</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Nature of Busness</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Your Designation</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Your are of Operation</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="state" className="form-label">State</label>
                            <select className="form-select" id="state" aria-label="Default select example">
                                {allState?.map((state, ind) => <option key={ind} value={state}>{state}</option>)}
                            </select>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">District</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">City</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Your City</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12">
                            {/* <label for="mobileNo." className="form-label">About you</label> */}
                            <textarea class="form-control" placeholder="About youself" rows={5} cols={5} ></textarea>
                        </div>
                        <div className="d-flex  justify-content-center">
                        <div className="btn btn-primary w-50">Save</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>)
}