import jwtDecode from 'jwt-decode'
const mytoken = "insurance_token"

export const getToken =()=>{
    return localStorage.getItem(mytoken)
}

export const getJwtDecode =(token)=>{
  return jwtDecode(token)
}

export const setToken =(token)=>{
    localStorage.setItem(mytoken,token)
}

export const deleteToken = ()=>{
    localStorage.removeItem(mytoken)
}

