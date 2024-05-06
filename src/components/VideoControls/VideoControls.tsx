import React from "react";

import "./VideoControls.css";

type VideoControlsProps = {
  children: React.ReactNode;
};

const VideoControls = ({ children }: VideoControlsProps) => {
  return <div className="videoControls">{children}</div>;
};

export default VideoControls;
