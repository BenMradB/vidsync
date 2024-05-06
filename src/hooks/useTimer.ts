import { useEffect } from "react";
import { useVideo } from "../contexts/VideoProvider";

export const useTimer = (videoRef: React.RefObject<HTMLVideoElement>) => {
  const { speed, dispatch } = useVideo() as {
    speed: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: React.Dispatch<any>;
  };

  useEffect(() => {
    videoRef.current?.addEventListener("loadeddata", () =>
      dispatch({
        type: "video/setDuration",
        payload: videoRef.current?.duration ?? 0,
      })
    );

    return () => {
      videoRef.current?.removeEventListener("loadeddata", () =>
        dispatch({
          type: "video/setDuration",
          payload: videoRef.current?.duration ?? 0,
        })
      );
    };
  }, [dispatch, videoRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        if (videoRef.current.currentTime === videoRef.current.duration) {
          dispatch({ type: "video/pause" });
          dispatch({ type: "video/setTimelineProgress", payload: 0 });
          dispatch({
            type: "video/setCurrentTime",
            payload: 0,
          });
        } else {
          dispatch({
            type: "video/setCurrentTime",
            payload: videoRef.current.currentTime,
          });
          dispatch({
            type: "video/setTimelineProgress",
            payload:
              (videoRef.current.currentTime / videoRef.current.duration) *
              speed *
              100,
          });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, videoRef]);
};
