import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import './Preloader.css';

const PreLoader=()=>{
    return (
        <div className="preloader">
            <ClimbingBoxLoader color={"#fff"} size={50} />
        </div>
    );
}

export default PreLoader;