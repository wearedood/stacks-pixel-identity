export enum AppStatus {
  IDLE = 'IDLE',
  CONNECTING = 'CONNECTING',
  INTERACTING = 'INTERACTING', // Waiting for blockchain tx
  GENERATING = 'GENERATING',   // Waiting for AI
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface PixelArtResult {
  cryptoName: string;
  imageUrl: string;
  trait: string;
}

// Stacks Mainnet Contract
export const TARGET_CONTRACT_ADDRESS = "SP1GVG84HRYCBYEW59M0S4XGQF8TTVXRF8XNXGBMH";
export const TARGET_CONTRACT_NAME = "pixel-identity";

export const CRYPTO_PERSONAS = [
  { name: 'Cyber-Miner', trait: 'The Hash Powerhouse' },
  { name: 'Digital Satoshi', trait: 'The Sovereign Visionary' },
  { name: 'Stacks Architect', trait: 'The Smart Contract Builder' },
  { name: 'Bitcoin Maximalist', trait: 'The Sound Money Guardian' },
  { name: 'Clarity Coder', trait: 'The Deterministic Logic Master' },
  { name: 'Layer 2 Pioneer', trait: 'The Scalability Explorer' },
  { name: 'Block Explorer', trait: 'The On-Chain Detective' },
  { name: 'DeFi Alchemist', trait: 'The Yield Optimizer' }
];
