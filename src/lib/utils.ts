export function formatTime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedDays = days >= 10 ? days : `0${days}`;
  const formattedHours = hours >= 10 ? hours : `0${hours}`;
  const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;
  const formattedSeconds =
    remainingSeconds >= 10 ? remainingSeconds : `0${remainingSeconds}`;

  if (days > 0) {
    return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds
      .toString()
      .slice(0, 2)}`;
  }

  if (hours > 0) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds
      .toString()
      .slice(0, 2)}`;
  }

  if (minutes > 0) {
    return `${formattedMinutes}:${formattedSeconds.toString().slice(0, 2)}`;
  }

  return `00:${formattedSeconds.toString().slice(0, 2)}`;
}
