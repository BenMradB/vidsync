import React from "react";
import usePictureInPicture from "react-use-pip";
import Button from "../Button";
import { ExtendedHTMLVideoElement } from "react-use-pip";
import { useVideo } from "../../contexts/VideoProvider";

export type PIPProps = {
  primaryColor: string;
  iconsColor: string;
  videoRef: React.RefObject<HTMLVideoElement>;
};

const PIP = ({ primaryColor, iconsColor, videoRef }: PIPProps) => {
  const { isPip, dispatch } = useVideo() as {
    isPip: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: React.Dispatch<any>;
  };

  const { isPictureInPictureActive, togglePictureInPicture } =
    usePictureInPicture(videoRef as React.RefObject<ExtendedHTMLVideoElement>);
  return (
    <Button
      primaryColor={primaryColor!}
      onClick={() => {
        if (videoRef.current) {
          togglePictureInPicture(!isPictureInPictureActive);
          dispatch({ type: "video/togglePip" });
        }
      }}
      tooltipId="pip"
      tooltipContent="Picture-in-Picture (i)"
    >
      {!isPip ? (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill={iconsColor}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path fill="none" d="M0 0h24v24H0z"></path>{" "}
              <path
                fill-rule="nonzero"
                d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zm-1 2h-6v4h6v-4zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043-2.25-2.25 1.414-1.414z"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill={iconsColor}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path fill="none" d="M0 0h24v24H0z"></path>{" "}
              <path
                fill-rule="nonzero"
                d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zm-1 2h-6v4h6v-4zm-8.5-8L9.457 9.043l2.25 2.25-1.414 1.414-2.25-2.25L6 12.5V7h5.5z"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      )}
    </Button>
  );
};

export default PIP;
