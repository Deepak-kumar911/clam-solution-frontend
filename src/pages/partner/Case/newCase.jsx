import { useState } from "react"
import { policyType,generalInsuranceList,healthInsuranceList,LifeInsuranceList } from "../../../utils/constant"


export default function NewCase(){
    const [selectPolicyType,setSelectPolicyType] =useState("")
    const [selectComplaintType,setComplaintPolicyType] = useState([])

   const handlePolicyType =(e)=>{
 setSelectPolicyType(e.target.value)
 if(e.target.value=="Life Insurance"){
  setComplaintPolicyType([...LifeInsuranceList])
 }else if(e.target.value=="General Insurance"){
setComplaintPolicyType([...generalInsuranceList])
 }else if(e.target.value=="Health Insurance") {
setComplaintPolicyType([...healthInsuranceList])
 }

 console.log(e.target.value);
   }


    return (<>
        <div className="container-fluid color-4 p-0 bg-color-7">
            <div className="contanter">
                <div>
                <div className="bg-color-5 d-flex color-1 py-1 justify-content-center"><h2>Add New Case</h2></div>
                    <div className="form p-5">
                        <div className="h4">Policy Holder's Details</div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                            {/* <div id="nameHelp" className="form-text text-danger">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="email" className="form-label">Father's Name</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Email</label>
                            <input type="email" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Mobile No</label>
                            <input type="email" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Policy Type</label>
                            <select className="form-select" value={selectPolicyType}  onChange={handlePolicyType} id="state" aria-label="Default select example">
                            <option  value="">--Select Policy Type</option>
                                {policyType.map((policy,ind)=><option key={ind} value={policy}>{policy}</option>)}
                            </select>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Insurance Company Name</label>
                            <input type="number" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Complaint Type</label>
                            <select className="form-select" id="state" aria-label="Default select example" disabled={!selectPolicyType}>
                            <option  value="">--Select Complaint Type</option>
                                {selectComplaintType?.map((complaint,ind)=><option key={complaint} value={complaint}>{complaint}</option>)}
                            </select>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Policy No/Insurance No.</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Address</label>
                            <input type="number" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">pin code</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">Claim Amount</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">City/District</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label for="mobileNo." className="form-label">state/Union Territory</label>
                            <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                        </div>
                        <div className="mb-3 col-12">
                            <textarea class="form-control" placeholder="Describe problem" rows={5} cols={5} ></textarea>
                        </div>
                        </div>
                        <div className="d-flex  justify-content-center py-3">
                        <div className="btn btn-primary w-50">Save</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>)
}