import React from 'react';
import { RingLoader } from "react-spinners";

const override = {
    position: "fixed",
    top: "38%",
    left: "48%"
    
};

const Loading = ({ loading }) => {
    return (
        <div>
            <RingLoader color="#ffca57"
                speedMultiplier={1} loading={loading} cssOverride={override} size={120} />
        </div>
    )
}

export default Loading;