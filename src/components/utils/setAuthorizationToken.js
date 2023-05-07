import axios from "axios";

export default function setAuthorizationToken(token) {
    if(tnoke) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ${token}';
    }else {
        delete axios.defaults.headers.common['Authorization'];
    }
}