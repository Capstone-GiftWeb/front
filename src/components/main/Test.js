import React from "react"
import axiosInstance from "../..";

const Test = () => {

    axiosInstance({
        method: "POST",
        url: "/test",
        headers:{
            "Content-Type":"application/json",
        },
    })
      .then((res) => {

        console.log(res);

       return res.data;
      })
      .catch((e)=>{
        console.log(e);
        console.log("Fail");
      });

    return(
        <h2>hi</h2>
    )
}

export default Test;