export interface drive {
  device: string;
  path: string;
  description: string;
  size: number;
  isSystem: boolean;
  isCard: boolean;
  isUsb: boolean;
  isRemovable: boolean;
}
