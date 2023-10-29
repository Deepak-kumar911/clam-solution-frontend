import "react-image-upload/dist/index.css";
import ImageUploader from "react-image-upload";
import React from 'react';

export default function BankDetails() {
    function getImageFileObject(imageFile) {
        console.log({ onAdd: imageFile });
    }
    function runAfterImageDelete(file) {
        console.log({ onDele: file });
    }

    return (<>
        <div className="container-fluid color-4 bg-color-7">
            <div className="contanter row">
            <div className="bg-color-5 d-flex color-1 py-1 justify-content-center"><h2>Banking Details</h2></div>
                <div className="row p-5">
                    <div className="mb-3 col-12 col-md-4">
                        <label for="name" className="form-label">Bank Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                        {/* <div id="nameHelp" className="form-text text-danger">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3 col-12 col-md-4">
                        <label for="email" className="form-label">Bank Account No</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-12 col-md-4">
                        <label for="mobileNo." className="form-label">Bank Branch Name</label>
                        <input type="text" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                    </div>
                    <div className="mb-3 col-12 col-md-4">
                        <label for="mobileNo." className="form-label">GST No</label>
                        <input type="number" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                    </div>
                    <div className="mb-3 col-12 col-md-4">
                        <label for="mobileNo." className="form-label">PAN NO</label>
                        <input type="number" className="form-control" id="mobileNo." aria-describedby="mobileNoHelp" />
                    </div>
                    <div className="d-flex gap-3">
                        <div className="">
                            <label for="chequeImg" className="form-label">Cancelled Cheque:</label>
                            <ImageUploader
                                id="chequeImg"
                                onFileAdded={(img) => getImageFileObject(img)} // function that runs to confirm that your image actually exists
                                onFileRemoved={(img) => runAfterImageDelete(img)} // function runs on once you delete your image
                                style={{ height: 200, width: 200 }}
                            />
                        </div>
                        <div className="">
                            <label for="gstImg" className="form-label">GST Copy</label>
                            <ImageUploader
                                id="gstImg"
                                onFileAdded={(img) => getImageFileObject(img)} // function that runs to confirm that your image actually exists
                                onFileRemoved={(img) => runAfterImageDelete(img)} // function runs on once you delete your image
                                style={{ height: 200, width: 200 }}
                            />
                        </div>
                    </div>
                    <div className="d-flex  justify-content-center">
                        <div className="btn btn-primary w-50">Save</div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}