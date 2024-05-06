import { useVideo } from "../../contexts/VideoProvider";
import React from "react";
import { formatTime } from "../../lib/utils";
import Button from "../Button";
import "./Timer.css";

export type TimerProps = {
  primaryColor: string;
  iconsColor: string;
};

const Timer = ({ primaryColor, iconsColor }: TimerProps) => {
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
      otherStyles={{ color: iconsColor }}
    >
      <span> {formatTime(currentTime)} </span>
      <span>/</span>
      <span> {formatTime(duration)} </span>
    </Button>
  );
};

export default Timer;
