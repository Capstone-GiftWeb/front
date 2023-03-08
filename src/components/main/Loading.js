import React from 'react';
import { ClipLoader } from "react-spinners";

const override = {
    display: "flex",
    margin: "0 auto",
    borderColor: "#E50915",
    textAlign: "center",
};

const Loading = ({loading}) => {
    return (
        <div>
            <ClipLoader color="#EAA763" loading={loading} cssOverride={override} size={150} />
        </div>
    )
}

export default Loading;