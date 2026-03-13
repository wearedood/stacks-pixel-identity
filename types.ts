export enum AppStatus {
  IDLE = 'IDLE',
  CONNECTING = 'CONNECTING',
  INTERACTING = 'INTERACTING',
  GENERATING = 'GENERATING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface PixelArtResult {
  cryptoName: string;
  imageUrl: string;
  trait: string;
}

export const TARGET_CONTRACT_ADDRESS = "SP1GVG84HRYCBYEW59M0S4XGQF8TTVXRF8XNXGBMH";
export const CONTRACT_NAME = "pixel-identity";
