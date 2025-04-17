export function ConvertToGigaBytes(bits: number): string {
  return `${(bits / 1000000000).toFixed(0)} GB`;
}
