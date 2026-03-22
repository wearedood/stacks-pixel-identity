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
  // DeFi / Trading archetypes
  { name: "DeFi Alchemist", trait: "THE YIELD OPTIMIZER" },
  { name: "Liquidity Phantom", trait: "THE POOL WHISPERER" },
  { name: "Leverage Lord", trait: "THE MARGIN HUNTER" },
  { name: "Yield Farmer", trait: "THE HARVEST KEEPER" },
  { name: "Flash Loan Bandit", trait: "THE ATOMIC RAIDER" },
  { name: "Arbitrage Ghost", trait: "THE SPREAD STALKER" },
  { name: "MEV Hunter", trait: "THE MEMPOOL PREDATOR" },
  { name: "Rug Survivor", trait: "THE BATTLE-HARDENED" },
  { name: "Diamond Hands", trait: "THE UNSHAKEABLE ONE" },
  { name: "Paper Hands Pete", trait: "THE EARLY SELLER" },
  { name: "Degen Trader", trait: "THE HIGH RISK ORACLE" },
  // Bitcoin maxis / OGs
  { name: "Satoshi Disciple", trait: "THE GENESIS BUILDER" },
  { name: "Bitcoin Maximalist", trait: "THE ORANGE PILL PROPHET" },
  { name: "Genesis Miner", trait: "THE FIRST BLOCK KEEPER" },
  { name: "HODL Monk", trait: "THE ETERNAL HOLDER" },
  { name: "Layer 2 Pioneer", trait: "THE SCALING VISIONARY" },
  { name: "Lightning Rider", trait: "THE INSTANT SETTLER" },
  { name: "Halving Prophet", trait: "THE CYCLE SEER" },
  { name: "Cold Storage Guardian", trait: "THE KEY KEEPER" },
  { name: "Blockspace Hoarder", trait: "THE FEE MARKET SAGE" },
  { name: "Stacks Builder", trait: "THE BITCOIN LAYER ARCHITECT" },
  // Hacker / dev types
  { name: "Mempool Surfer", trait: "THE TX NAVIGATOR" },
  { name: "Smart Contract Wizard", trait: "THE CODE CONJURER" },
  { name: "Zero Knowledge Sage", trait: "THE PROOF WEAVER" },
  { name: "Protocol Hacker", trait: "THE SYSTEM BREAKER" },
  { name: "Bytecode Phantom", trait: "THE EVM GHOST" },
  { name: "Bug Bounty Hunter", trait: "THE EXPLOIT FINDER" },
  { name: "Node Operator", trait: "THE NETWORK BACKBONE" },
  { name: "Merkle Tree Climber", trait: "THE ROOT SEEKER" },
  { name: "Gas Optimizer", trait: "THE EFFICIENCY MONK" },
  { name: "Fork Heretic", trait: "THE CHAIN SPLITTER" },
  { name: "Testnet Wanderer", trait: "THE SANDBOX EXPLORER" },
  // Mystic / lore / fantasy vibes
  { name: "Chain Oracle", trait: "THE ON-CHAIN PROPHET" },
  { name: "Block Shaman", trait: "THE LEDGER MYSTIC" },
  { name: "Consensus Druid", trait: "THE VALIDATOR OF TRUTH" },
  { name: "Hash Rate Warlock", trait: "THE ENTROPY BENDER" },
  { name: "Nonce Sorcerer", trait: "THE PUZZLE MASTER" },
  { name: "Immutable Specter", trait: "THE ETERNAL WITNESS" },
  { name: "Genesis Architect", trait: "THE WORLD BUILDER" },
  { name: "Cryptographic Sage", trait: "THE CIPHER KEEPER" },
  { name: "Decentralized Nomad", trait: "THE TRUSTLESS WANDERER" },
  { name: "Token Summoner", trait: "THE ASSET CONJURER" },
  { name: "Whale Watcher", trait: "THE DEEP OCEAN SCOUT" },
  { name: "Rune Caster", trait: "THE INSCRIPTION MAGE" },
];
