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

export const CRYPTO_PERSONAS = [
  { name: "DeFi Alchemist", trait: "THE YIELD OPTIMIZER" },
  { name: "Satoshi Disciple", trait: "THE GENESIS BUILDER" },
  { name: "Mempool Surfer", trait: "THE TX NAVIGATOR" },
  { name: "Layer 2 Pioneer", trait: "THE SCALING VISIONARY" }
];
