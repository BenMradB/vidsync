import { useEffect } from "react";
import { useVideo } from "../contexts/VideoProvider";
import { FullScreenHandle } from "react-full-screen";
import { ExtendedHTMLVideoElement } from "react-use-pip";
import usePictureInPicture from "react-use-pip";

export const useKeys = (
  videoRef: React.RefObject<HTMLVideoElement>,
  nextVideoHandler: () => void,
  previousVideoHandler: () => void
) => {
  const { isPlaying, speed, dispatch, handle } = useVideo() as {
    speed: number;
    isPlaying: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: React.Dispatch<any>;
    handle: FullScreenHandle;
  };

  const { isPictureInPictureActive, togglePictureInPicture } =
    usePictureInPicture(videoRef as React.RefObject<ExtendedHTMLVideoElement>);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey) {
        switch (e.key.toLocaleLowerCase()) {
          case "n":
            nextVideoHandler();
            break;
          case "p":
            previousVideoHandler();
            break;
          default:
            break;
        }
      } else {
        switch (e.key.toLocaleLowerCase()) {
          case "k":
          case " ":
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
            break;

          case "f":
            if (document.fullscreenElement) {
              document.exitFullscreen();
              dispatch({ type: "video/toggleFullscreen" });
            } else {
              dispatch({ type: "video/toggleFullscreen" });
              handle.enter();
            }

            break;

          case "m":
            dispatch({ type: "video/toggleMute" });
            videoRef.current!.muted = !videoRef.current!.muted;
            break;

          case "arrowdown":
            if (videoRef.current!.volume - 0.1 < 0) return;

            videoRef.current!.volume -= 0.1;
            dispatch({
              type: "video/setVolume",
              payload: videoRef.current!.volume - 0.1,
            });
            break;

          case "arrowup":
            if (videoRef.current!.volume + 0.1 > 1) return;
            videoRef.current!.volume += 0.1;
            dispatch({
              type: "video/setVolume",
              payload: videoRef.current!.volume + 0.1,
            });
            break;

          case "arrowleft":
            videoRef.current!.currentTime -= 10;
            dispatch({
              type: "video/setCurrentTime",
              payload: videoRef.current!.currentTime,
            });

            dispatch({
              type: "video/setTimelineProgress",
              payload:
                (videoRef.current!.currentTime / videoRef.current!.duration) *
                speed *
                100,
            });
            dispatch({
              type: "video/toggleShowRevertAnimation",
            });
            setTimeout(() => {
              dispatch({ type: "video/toggleShowRevertAnimation" });
            }, 500);

            break;

          case "arrowright":
            videoRef.current!.currentTime += 10;
            dispatch({
              type: "video/setCurrentTime",
              payload: videoRef.current!.currentTime,
            });
            dispatch({
              type: "video/setTimelineProgress",
              payload:
                (videoRef.current!.currentTime / videoRef.current!.duration) *
                speed *
                100,
            });
            dispatch({
              type: "video/toggleShowForwardAnimation",
            });
            setTimeout(() => {
              dispatch({ type: "video/toggleShowForwardAnimation" });
            }, 500);
            break;

          case "i":
            togglePictureInPicture(!isPictureInPictureActive);
            dispatch({ type: "video/togglePip" });
            break;

          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying, dispatch]);
};
