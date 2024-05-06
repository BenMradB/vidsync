import React from "react";
import { useVideo } from "../contexts/VideoProvider";

export type PlayPauseAnimationProps = {
  primaryColor: string;
  iconsColor: string;
  videoRef: React.RefObject<HTMLVideoElement>;
};

const PlayPauseAnimation = ({
  primaryColor,
  iconsColor,
  videoRef,
}: PlayPauseAnimationProps) => {
  const { showPlayAnimation, isPlaying, dispatch } = useVideo() as {
    showPlayAnimation: boolean;
    isPlaying: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: React.Dispatch<any>;
  };
  return (
    <>
      {!isPlaying && !showPlayAnimation ? (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: primaryColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play();
                dispatch({ type: "video/play" });
              }
              dispatch({ type: "video/toggleShowPlayAnimation" });
              setTimeout(() => {
                dispatch({ type: "video/toggleShowPlayAnimation" });
              }, 500);
            }}
          >
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                  fill={iconsColor}
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      ) : null}

      {showPlayAnimation ? (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="ping-animation"
            style={{
              backgroundColor: primaryColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          >
            {isPlaying ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                    fill={iconsColor}
                  ></path>{" "}
                  <path
                    d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                    fill={iconsColor}
                  ></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                    fill={iconsColor}
                  ></path>{" "}
                </g>
              </svg>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PlayPauseAnimation;
