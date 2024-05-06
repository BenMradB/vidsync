import React from "react";

import { createContext, Reducer, useContext, useReducer } from "react";
import { useFullScreenHandle } from "react-full-screen";

const VideoContext = createContext<unknown>(undefined);

export type InitialStateType = {
  currentTime: number;
  timelineProgress: number;
  duration: number;
  speed: number;
  volume: number;
  isPlaying: boolean;
  isMuted: boolean;
  isFullScreen: boolean;
  isPip: boolean;
  showPlayAnimation: boolean;
  showRevertAnimation: boolean;
  showForwardAnimation: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReducerActionType = { type: string; payload?: any };

const initialState: InitialStateType = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  timelineProgress: 0,
  speed: 1,
  volume: 1,
  isMuted: false,
  isFullScreen: false,
  isPip: false,
  showPlayAnimation: false,
  showRevertAnimation: false,
  showForwardAnimation: false,
};

const reducer = (
  state: InitialStateType,
  action: ReducerActionType
): InitialStateType => {
  switch (action.type) {
    case "video/play":
      return { ...state, isPlaying: true };
    case "video/pause":
      return { ...state, isPlaying: false };
    case "video/setCurrentTime":
      return { ...state, currentTime: action.payload };
    case "video/setDuration":
      return { ...state, duration: action.payload };
    case "video/setTimelineProgress":
      return { ...state, timelineProgress: action.payload };
    case "video/setSpeed":
      return { ...state, speed: action.payload };
    case "video/setVolume":
      return { ...state, volume: action.payload };
    case "video/toggleMute":
      return { ...state, isMuted: !state.isMuted };
    case "video/toggleFullscreen":
      return { ...state, isFullScreen: !state.isFullScreen };
    case "video/togglePip":
      return { ...state, isPip: !state.isPip };

    case "video/toggleShowPlayAnimation":
      return { ...state, showPlayAnimation: !state.showPlayAnimation };
    case "video/toggleShowRevertAnimation":
      return { ...state, showRevertAnimation: !state.showRevertAnimation };
    case "video/toggleShowForwardAnimation":
      return { ...state, showForwardAnimation: !state.showForwardAnimation };
    default:
      return state;
  }
};

const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [
    {
      currentTime,
      timelineProgress,
      duration,
      speed,
      volume,
      isPlaying,
      isMuted,
      isFullScreen,
      isPip,

      showPlayAnimation,
      showRevertAnimation,
      showForwardAnimation,
    },
    dispatch,
  ] = useReducer<Reducer<InitialStateType, ReducerActionType>>(
    reducer,
    initialState
  );

  const handle = useFullScreenHandle();

  return (
    <VideoContext.Provider
      value={{
        currentTime,
        timelineProgress,
        duration,
        speed,
        volume,
        isPlaying,
        isMuted,
        isFullScreen,
        isPip,

        showPlayAnimation,
        showRevertAnimation,
        showForwardAnimation,
        dispatch,
        handle,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};

export { VideoProvider, useVideo };
