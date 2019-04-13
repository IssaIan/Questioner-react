import React from "react";
import { BeatLoader } from "react-spinners";

/** function component to render a circular spinner */
const Loader = () => (
    
      <div id="loader-body" className="loader-body">
        <div className="sweet-loading" />
        <div align="center" className="lds-ripple">
          <BeatLoader
            sizeUnit="px"
            size={60}
            color="#fafafa"
          />
        </div>
      </div>
);

export default Loader;