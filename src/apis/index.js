import axios from 'axios'
const API_BASE = "http://localhost:8000"
import { getToken } from '../utils/helperFunction';

export const API_BASE_IMG = "http://localhost:8000/images"


setheader()

export function setheader(){
  if(getToken()){
    axios.defaults.headers.common["x-auth-token"] = getToken();
  }
  }

export const signUp = (data)=>{
 return axios.post(`${API_BASE}/api/partner/signUp`,data)
}

export const verifyOtp = (data)=>{
    setheader()
    return axios.post(`${API_BASE}/api/partner/verifyEmail`,data)
   }

export const genrateNewPassword = (data)=>{
    setheader()
    return axios.post(`${API_BASE}/api/partner/setNewPassword`,data)
   }

export const signin = (data)=>{
    setheader()
    return axios.post(`${API_BASE}/api/partner/signIn`,data)
   }

export const getPartnerProfile = (data)=>{
    setheader()
    return axios.get(`${API_BASE}/api/partner/getProfileDetails`)
   }


