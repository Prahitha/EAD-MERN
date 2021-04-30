import React from "react";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function Logout({ logout, history }) {
    toast.success('Logged Out', {autoClose:3000, style: ({fontSize: "15px" })});
    logout(history);
    return null;
}

export default Logout;