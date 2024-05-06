import React from "react";

import "./VidSyncPlayer.css";
import { useRef, useState, VideoHTMLAttributes } from "react";
import { useVideo, VideoProvider } from "../../contexts/VideoProvider";
import VideoControls from "../VideoControls";
import { useKeys } from "../../hooks/useKeys";
import {
  FullScreenHandle,
  FullScreen as ReactFullScreen,
} from "react-full-screen";
import PlayButton from "../PlayButton";
import NextVideo from "../NextVideo";
import FullScreen from "../FullScreen";
import PreviousVideo from "../PreviousVideo";
import Volume from "../Volume";
import Timer from "../Timer";
import { useTimer } from "../../hooks/useTimer";
import PlayPauseAnimation from "../../animations/PlayPauseAnimation";
import { ForwardAnimation, RevertAnimation } from "../../animations";
import Timeline from "../Timeline";
import PIP from "../PIP";
import Speed from "../Speed";

type VidSyncPlayerProps = Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  "src" | "poster"
> & {
  src: string | string[];
  poster?: string | string[];
  primaryColor?: string;
  iconsColor?: string;
  containerStyles?: React.CSSProperties;
  videoStyles?: React.CSSProperties;
  index?: number;
};

const Player = ({
  src,
  poster,
  primaryColor,
  iconsColor,
  index,
  autoPlay,
  loop,
  containerStyles,
  videoStyles,
  ...props
}: VidSyncPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isPlaying, timelineProgress, handle, dispatch } = useVideo() as {
    isPlaying: boolean;
    timelineProgress: number;
    isFullScreen: boolean;
    handle: FullScreenHandle;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: React.Dispatch<any>;
  };

  const [startIndex, setStartIndex] = useState<number>(
    src === "object" && index! <= src.length - 1 ? index! : 0 ?? 0
  );

  const onTogglePlayVideoHandler = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      dispatch({ type: "video/pause" });
    } else {
      videoRef.current?.play();
      dispatch({ type: "video/play" });
    }

    dispatch({ type: "video/toggleShowPlayAnimation" });
    setTimeout(() => {
      dispatch({ type: "video/toggleShowPlayAnimation" });
    }, 500);
  };

  const nextVideoHandler = () =>
    setStartIndex((curr) => (curr < src?.length ? curr + 1 : curr));
  const previousVideoHandler = () =>
    setStartIndex((curr) => (curr > 0 ? curr - 1 : curr));

  useTimer(videoRef);

  useKeys(videoRef, nextVideoHandler, previousVideoHandler);

  return (
    <ReactFullScreen handle={handle}>
      <div
        className="videoContainer"
        style={{
          ...containerStyles,
        }}
      >
        <PlayPauseAnimation
          primaryColor={primaryColor!}
          iconsColor={iconsColor!}
          videoRef={videoRef}
        />

        <RevertAnimation
          primaryColor={primaryColor!}
          iconsColor={iconsColor!}
        />

        <ForwardAnimation
          primaryColor={primaryColor!}
          iconsColor={iconsColor!}
        />

        {(poster || poster?.length) && !isPlaying && !timelineProgress ? (
          <div className="poster">
            <img
              src={typeof poster === "string" ? poster : poster[startIndex]}
              style={{
                opacity: !isPlaying && (poster || poster?.length) ? 1 : 0,
              }}
            />
          </div>
        ) : null}
        <video
          src={typeof src === "string" ? src : src[startIndex]}
          className="video"
          style={{
            ...videoStyles,
          }}
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          onClick={onTogglePlayVideoHandler}
          {...props}
        />
        <div className="actionContainer">
          <Timeline primaryColor={primaryColor!} videoRef={videoRef} />
          <VideoControls>
            <div
              style={{
                display: "flex",
                alignItems: "center",

                gap: "1rem",
              }}
            >
              {typeof src === "object" ? (
                <>
                  {startIndex > 0 ? (
                    <PreviousVideo
                      primaryColor={primaryColor!}
                      iconsColor={iconsColor!}
                      videoRef={videoRef}
                      previousVideoHandler={previousVideoHandler}
                    />
                  ) : null}
                </>
              ) : null}
              <PlayButton
                primaryColor={primaryColor!}
                iconsColor={iconsColor!}
                videoRef={videoRef}
              />
              {typeof src === "object" ? (
                <>
                  {startIndex < src!.length - 1 ? (
                    <NextVideo
                      primaryColor={primaryColor!}
                      iconsColor={iconsColor!}
                      videoRef={videoRef}
                      nextVideoHandler={nextVideoHandler}
                    />
                  ) : null}
                </>
              ) : null}

              <Volume
                primaryColor={primaryColor!}
                iconsColor={iconsColor!}
                videoRef={videoRef}
              />

              <Timer primaryColor={primaryColor!} iconsColor={iconsColor!} />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Speed
                primaryColor={primaryColor!}
                iconsColor={iconsColor!}
                videoRef={videoRef}
              />

              <PIP
                primaryColor={primaryColor!}
                iconsColor={iconsColor!}
                videoRef={videoRef}
              />
              <FullScreen
                primaryColor={primaryColor!}
                iconsColor={iconsColor!}
              />
            </div>
          </VideoControls>
        </div>
      </div>
    </ReactFullScreen>
  );
};

const VidSyncPlayer = ({
  src,
  poster,
  primaryColor = "#FF782D",
  iconsColor = "#FFFFFF", // Added "iconsColor" prop to change the color of the icons
  containerStyles,
  videoStyles,
  index = 0,
  autoPlay = false,
  loop = false,
  ...props
}: VidSyncPlayerProps) => {
  return (
    <VideoProvider>
      <Player
        src={src}
        poster={poster}
        primaryColor={primaryColor}
        iconsColor={iconsColor}
        containerStyles={containerStyles}
        videoStyles={videoStyles}
        index={index}
        autoPlay={autoPlay}
        loop={loop}
        {...props}
      />
    </VideoProvider>
  );
};

export default VidSyncPlayer;
