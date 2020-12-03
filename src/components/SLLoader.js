import React, { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
function SLLoader(props) {
  let [show, setShow] = useState(props.showLoader);
  useEffect(() => {
    setShow(props.showLoader);
  }, [props.showLoader]);

  return show ? (
    <div className="loader">
      <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000000} //3 secs
      />
    </div>
  ) : null;
}

export default SLLoader;
