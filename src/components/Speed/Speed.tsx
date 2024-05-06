import React from "react";

import { useVideo } from "../../contexts/VideoProvider";
import Button from "../Button";
import "./Speed.css";

export type SpeedProps = {
  primaryColor: string;
  iconsColor: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  videoContainerRef: React.RefObject<HTMLDivElement>;
};

const Speed = ({
  primaryColor,
  iconsColor,
  videoRef,
  videoContainerRef,
}: SpeedProps) => {
  const { speed, dispatch } = useVideo() as {
    speed: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: React.Dispatch<any>;
  };

  const onChangeVideoSpeedHandler = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate =
        videoRef.current.playbackRate < 2
          ? videoRef.current.playbackRate + 0.25
          : 0.25;
      dispatch({
        type: "video/setSpeed",
        payload: videoRef.current.playbackRate,
      });
    }
  };
  return (
    <Button
      className="speedContainer"
      primaryColor={primaryColor}
      onClick={onChangeVideoSpeedHandler}
      otherStyles={{
        display:
          videoContainerRef.current?.offsetWidth &&
          videoContainerRef.current.offsetWidth < 570
            ? "none"
            : undefined,
      }}
    >
      <span
        className="speed"
        style={{
          color: iconsColor,
        }}
      >
        {speed}x
      </span>
    </Button>
  );
};

export default Speed;
