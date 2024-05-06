import React from "react";

import { useVideo } from "../../contexts/VideoProvider";
import "./Timeline.css";

export type TimelineProps = {
  primaryColor: string;
  videoRef: React.RefObject<HTMLVideoElement>;
};

const Timeline = ({ primaryColor, videoRef }: TimelineProps) => {
  const { timelineProgress, speed } = useVideo() as {
    timelineProgress: number;
    speed: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: React.Dispatch<any>;
  };

  const onTimelineMouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percentage =
        Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;

      videoRef.current.currentTime =
        videoRef.current.duration * percentage * videoRef.current.playbackRate;
    }
  };
  return (
    <div className="timelineContainer" onMouseDown={onTimelineMouseMoveHandler}>
      <div
        className="timeline"
        style={{
          width: `${timelineProgress / speed}%`,
          background: primaryColor,
          zIndex: 100,
        }}
      />
      <div
        className="timelineThumb"
        style={{
          background: primaryColor,
          left: `${timelineProgress / speed - 0.9}%`,
        }}
      />
    </div>
  );
};

export default Timeline;
