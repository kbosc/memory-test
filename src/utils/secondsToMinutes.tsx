export default function resultTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}m${seconds}s`
  }