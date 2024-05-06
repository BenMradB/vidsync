# VidSync 🎬

VidSync is a powerful React TypeScript component designed to enhance the native HTML video player experience. With VidSync, you can effortlessly manage and switch between multiple videos within an array while enjoying a host of customizable features. From seamless mobile integration to intuitive key bindings, VidSync is engineered to elevate your video playback experience.

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
  poster?: string | stri[];
  index?: number;
};
export const VideoPlayer = ({ src, poster, index }: VideoPlayerProps) => {
  return <VidSyncPlayer src={src} poster={poster} index={index} />;
};
```

## Documentation

## 🎥🎥Native HTML Video Tag Attributes 🎥🎥

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
