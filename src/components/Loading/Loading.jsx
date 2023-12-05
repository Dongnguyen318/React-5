import React from "react";
import "./loading.scss";
import loadingGif from "../../assets/img/Rolling-1s-200px.gif";

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="loading">
        <img src={loadingGif} />
      </div>
      <div className="overlay"></div>
    </div>
  );
}
