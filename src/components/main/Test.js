import React from "react"
import axios from "axios";
import axiosInstance from "../..";
  
const Test = () => {
      axiosInstance({
        method: "GET",
        url: "/gifts",
        headers:{"Content-Type":"application/json",},
      })
      .then((res) => {
        console.log(res);
       return res.data;
      })
      .catch((e)=>{
        console.log(e);
        console.log("Fail");
      });
}

export default Test;