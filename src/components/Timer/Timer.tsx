import React from "react";
import { useVideo } from "../../contexts/VideoProvider";
import { formatTime } from "../../lib/utils";
import Button from "../Button";
import "./Timer.css";

export type TimerProps = {
  primaryColor: string;
  iconsColor: string;
  videoContainerRef: React.RefObject<HTMLDivElement>;
};

const Timer = ({ primaryColor, iconsColor, videoContainerRef }: TimerProps) => {
  const { duration, currentTime } = useVideo() as {
    duration: number;
    currentTime: number;
  };

  return (
    <Button
      className="timer"
      primaryColor={primaryColor}
      onClick={() => {}}
      tooltipId="timer"
      tooltipContent={`${formatTime(currentTime)} / ${formatTime(duration)}`}
      otherStyles={{
        color: iconsColor,
        display:
          videoContainerRef.current?.offsetWidth &&
          videoContainerRef.current.offsetWidth < 570
            ? "none"
            : undefined,
      }}
    >
      <span> {formatTime(currentTime)} </span>
      <span>/</span>
      <span> {formatTime(duration)} </span>
    </Button>
  );
};

export default Timer;
