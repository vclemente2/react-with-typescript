export function timeToSecond(time: string): number {
  const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");

  return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
}

export function secondsToMinutes(time: number): Array<string> {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesString = String(minutes).padStart(2, "0");
  const secondsString = String(seconds).padStart(2, "0");

  return [minutesString, secondsString];
}
