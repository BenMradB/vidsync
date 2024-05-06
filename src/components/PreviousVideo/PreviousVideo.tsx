import React from "react";
import "./PreviousVideo.css";
import Button from "../Button";

export type PreviousVideoProps = {
  primaryColor: string;
  iconsColor: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  previousVideoHandler: () => void;
};

const PreviousVideo = ({
  iconsColor,
  primaryColor,
  videoRef,
  previousVideoHandler,
}: PreviousVideoProps) => {
  const onClickPreviousVideoHandler = () => {
    if (videoRef.current) {
      previousVideoHandler();
    }
  };
  return (
    <Button
      onClick={onClickPreviousVideoHandler}
      primaryColor={primaryColor}
      tooltipId="previous-video"
      tooltipContent="Previous Video (Shift + P)"
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M20.2409 7.21957V16.7896C20.2409 18.7496 18.1109 19.9796 16.4109 18.9996L12.2609 16.6096L8.11094 14.2096C6.41094 13.2296 6.41094 10.7796 8.11094 9.79957L12.2609 7.39957L16.4109 5.00957C18.1109 4.02957 20.2409 5.24957 20.2409 7.21957Z"
            fill={iconsColor}
          ></path>{" "}
          <path
            d="M3.76172 18.9303C3.35172 18.9303 3.01172 18.5903 3.01172 18.1803V5.82031C3.01172 5.41031 3.35172 5.07031 3.76172 5.07031C4.17172 5.07031 4.51172 5.41031 4.51172 5.82031V18.1803C4.51172 18.5903 4.17172 18.9303 3.76172 18.9303Z"
            fill={iconsColor}
          ></path>{" "}
        </g>
      </svg>
    </Button>
  );
};

export default PreviousVideo;
