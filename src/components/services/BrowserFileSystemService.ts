import { drive } from "../../../types/FileSystemTypes";

export function osRunning(): string {
  const userAgent = navigator.userAgent.toLowerCase();
  let os = "Unknown OS";
  if (userAgent.includes("win")) {
    os = "Windows";
  } else if (userAgent.includes("mac")) {
    os = "macOS";
  } else if (userAgent.includes("android")) {
    os = "Android";
  } else if (userAgent.includes("linux")) {
    os = "Linux";
  }
  return os;
}

async function getDrives() {
  return (
    await fetch(`http://${location.hostname}:5000/api/file-system/storage`)
  ).json();
}

export default async function FileSystem(): Promise<drive[]> {
  return await getDrives();
}
