# VidSync 🎬

🎬 VidSync: Enhance Your Video Experience! 📹

VidSync is your all-in-one solution for turbocharging the native HTML video player in your React applications. 🚀 Whether you're streaming, presenting, or creating interactive media experiences, VidSync has got you covered!

With VidSync, you can seamlessly switch between multiple videos, effortlessly control playback with intuitive keyboard shortcuts, and enjoy full mobile compatibility. 📱 Plus, unleash your creativity with extensive customization options, allowing you to tailor the video player to perfectly suit your project's style. 🎨

Key Features:

    🔄 Switch between multiple videos on the fly.
    🎮 Intuitive keyboard shortcuts for convenient playback control.
    🖌️ Fully customizable styling to match your project's aesthetic.
    📱 Mobile-friendly design ensures a smooth experience on any device.
    🚀 Lightweight and easy to integrate into your React applications.

Whether you're building a video gallery, an e-learning platform, or a multimedia presentation, VidSync empowers you to deliver a seamless and engaging video experience to your users. Try VidSync today and take your video playback to the next level! 💫

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Features 🚀

- **Enhanced Video Player** 📺: VidSync provides a streamlined interface to optimize your video viewing experience.
- **Multiple Video Support** 🔄: Easily manage and switch between a collection of videos with a simple array setup.
- **Customizable Interface** 🎨: Tailor VidSync to fit your specific needs with extensive customization options.
- **Mobile Friendly** 📱: VidSync is fully optimized for mobile devices, ensuring a consistent experience across all platforms.
- **Intuitive Key Bindings** ⌨️: Effortlessly

[![MasterHead](<https://github.com/BenMradB/vidsync/blob/main/screenshots/1%20(2).png?raw=true>)](https://rishavchanda.io)

## Installation ⚙️

install via npm

```bash
npm install vidsync
```

Or, using yarn

```bash
yarn add vidsync
```

## Usage/Examples

```typescript
import { VidSyncPlayer } from "vidsync";

type VideoPlayerProps = {
  src: string | string[];
  poster?: string | string[];
  index?: number;
};
export const VideoPlayer = ({ src, poster, index }: VideoPlayerProps) => {
  return <VidSyncPlayer src={src} poster={poster} index={index} />;
};
```

## Customization Options 🎨

### Playing With The Primary Color

```typescript
import { VidSyncPlayer } from "vidsync";

type VideoPlayerProps = {
  src: string | string[];
  poster?: string | string[];
  index?: number;
};
export const VideoPlayer = ({ src, poster, index }: VideoPlayerProps) => {
  return (
    <VidSyncPlayer
      src={src}
      poster={poster}
      index={index}
      primaryColor="#22d3ee"
    />
  );
};
```

[![MasterHead](https://github.com/BenMradB/vidsync/blob/main/screenshots/primaryColor.png?raw=true)](https://rishavchanda.io)

### Playing With The Icons & text Color

```typescript
import { VidSyncPlayer } from "vidsync";

type VideoPlayerProps = {
  src: string | string[];
  poster?: string | string[];
  index?: number;
};
export const VideoPlayer = ({ src, poster, index }: VideoPlayerProps) => {
  return (
    <VidSyncPlayer
      src={src}
      poster={poster}
      index={index}
      primaryColor="#22d3ee"
      iconsColor="orange"
    />
  );
};
```

[![MasterHead](https://github.com/BenMradB/vidsync/blob/main/screenshots/iconsColor.png?raw=true)](https://rishavchanda.io)

## Documentation

## 🎥🎥Native HTML Video Tag Attributes 🎥🎥

| Attribute | Type               | Description                                |
| --------- | ------------------ | ------------------------------------------ |
| autoplay  | boolean            | Video plays automatically when loaded      |
| controls  | boolean            | Displays video controls                    |
| height    | string             | Specifies the height of the video player   |
| loop      | boolean            | Video restarts automatically when finished |
| muted     | boolean            | Video's audio is muted                     |
| poster    | string             | Image displayed while video is loading     |
| preload   | string             | Specifies how video should be loaded       |
| src       | string \| string[] | URL of the video file                      |
| width     | string             | Specifies the width of the video player    |

### ✨✨VidSync Attribute ✨✨

| Attribute       | Type                           | Description                                                                            |
| --------------- | ------------------------------ | -------------------------------------------------------------------------------------- |
| src             | string \| string[]             | The URL or array of URLs of the video file(s).                                         |
| poster          | string \| string[]             | The URL or array of URLs for the poster image(s) displayed while the video is loading. |
| index           | number                         | The index of the video in the `src` array to start from. Default is 0.                 |
| containerStyles | React.CSSProperties            | Custom styles for the video container element.                                         |
| videoStyles     | React.CSSProperties            | Custom styles for the video element.                                                   |
| primaryColor    | string                         | The primary color used for styling the component.                                      |
| iconsColor      | string                         | The color used for icons (e.g., play button, controls).                                |
| autoplay        | boolean                        | Specifies that the video will start playing as soon as it is ready.                    |
| controls        | boolean                        | Specifies that video controls should be displayed.                                     |
| height          | string                         | Specifies the height of the video player.                                              |
| loop            | boolean                        | Specifies that the video will start over again, every time it is finished.             |
| muted           | boolean                        | Specifies that the audio output of the video should be muted.                          |
| preload         | "auto" \| "metadata" \| "none" | Specifies if and how the video should be loaded when the page loads.                   |
| width           | string                         | Specifies the width of the video player.                                               |

## 🎮🎮 Key Bindings 🎮🎮

VidSync provides convenient keyboard shortcuts to control your video playback experience. Here's a list of key bindings along with their corresponding actions:

| Shortcut      | Description                         |
| ------------- | ----------------------------------- |
| Shift + N     | Moves to the next video 🎬          |
| Shift + P     | Moves to the previous video 🔄      |
| K or Spacebar | Toggles between play and pause ▶️⏸️ |
| F             | Toggles full-screen mode 🌐         |
| M             | Toggles mute/unmute 🔇🔊            |
| Arrow Down    | Decreases the volume 🔉             |
| Arrow Up      | Increases the volume 🔊             |
| Arrow Left    | Seeks backward by 10 seconds ⏪     |
| Arrow Right   | Seeks forward by 10 seconds ⏩      |
| I             | Toggles picture-in-picture mode 🖼️  |

These shortcuts allow you to seamlessly control your video playback without leaving your keyboard. Enjoy your video experience with VidSync!

## 📹🎚️ All Events 📹🎚️

| Function Name      | Type                                    | Default Value | Description                                                                              |
| ------------------ | --------------------------------------- | ------------- | ---------------------------------------------------------------------------------------- |
| `onAbort`          | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the loading of the video is aborted.                                    |
| `onCanPlay`        | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the browser can start playing the video.                                |
| `onCanPlayThrough` | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the video can be played through to the end without buffering.           |
| `onDurationChange` | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the duration of the video is updated.                                   |
| `onEmptied`        | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the video element's resource is suddenly unavailable.                   |
| `onEnded`          | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the video has ended.                                                    |
| `onError`          | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when an error occurred during the loading of the video.                      |
| `onLoadedData`     | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the first frame of the video has finished loading.                      |
| `onLoadedMetadata` | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the metadata (like dimensions and duration) has been loaded.            |
| `onLoadStart`      | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the browser starts loading the video.                                   |
| `onPause`          | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the video is paused.                                                    |
| `onPlay`           | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the video starts playing.                                               |
| `onPlaying`        | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the video is playing after having been paused or stopped for buffering. |
| `onProgress`       | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the browser is fetching the video data.                                 |
| `onSeeked`         | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the seeking operation has completed.                                    |
| `onSeeking`        | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the browser is in the process of seeking the position of the video.     |
| `onStalled`        | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the browser is trying to get media data, but data is not available.     |
| `onSuspend`        | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the browser is intentionally not currently fetching the media data.     |
| `onTimeUpdate`     | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the current playback position has changed.                              |
| `onVolumeChange`   | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the volume of the video has changed.                                    |
| `onWaiting`        | `((event: Event) => void) \| undefined` | `undefined`   | Handler for when the video is waiting for data from the server.                          |
