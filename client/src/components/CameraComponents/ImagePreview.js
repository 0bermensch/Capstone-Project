import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? "image-preview-fullscreen" : "";

  return (
    <div className="selfie">
      <div className={"imagepreview " + classNameFullscreen}>
        <img src={dataUri} alt="face" />
        <h1 className="imagepreview__emotion">Happiness</h1>
        <div className="imagepreview__function">
          <NavLink to="/">
            <h1 className="imagepreview__retake">Retake</h1>
          </NavLink>
          <NavLink to="/playlist">
            <h1 className="imagepreview__proceed">Proceed to Music</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

// now I need to be able to get the emotion info from the backend and let the user know what

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;
