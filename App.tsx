import React, { useState } from 'react';
import { connectWallet, sendInteractionTransaction } from './services/web3Service';
import { generatePixelArtIdentity } from './services/geminiService';
import { AppStatus, PixelArtResult, TARGET_CONTRACT_ADDRESS } from './types';
import Button from './components/Button';
import ResultCard from './components/ResultCard';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [result, setResult] = useState<PixelArtResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      const addr = await connectWallet();
      setWalletAddress(addr);
    } catch (e: any) { console.error(e); }
  };

  const handleReveal = async () => {
    try {
      setErrorMsg(null);
      let addr = walletAddress;
      if (!addr) { addr = await connectWallet(); setWalletAddress(addr); }
      setStatus(AppStatus.INTERACTING);
      await sendInteractionTransaction(addr);
      setStatus(AppStatus.GENERATING);
      const art = await generatePixelArtIdentity();
      setResult(art);
      setStatus(AppStatus.SUCCESS);
    } catch (err: any) {
      setStatus(AppStatus.ERROR);
      setErrorMsg(err.message || "Transaction failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#FF9900] bg-gradient-to-br from-[#FF9900] to-[#FFB347] flex flex-col font-sans text-black overflow-hidden relative">
      <header className="w-full px-8 py-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Stacks Identity Logo" className="w-16 h-16 object-contain" style={{ imageRendering: 'pixelated' }} />
          <span className="font-bold text-xl tracking-tight">Stacks<span className="italic">Identity</span></span>
        </div>
        {walletAddress ? (
          <div className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-black/10 font-bold text-xs">
            {walletAddress.slice(0,6)}...{walletAddress.slice(-4)}
          </div>
        ) : (
          <button onClick={handleConnect} className="font-bold border-b-2 border-black text-sm hover:opacity-70 transition-opacity">Connect Wallet</button>
        )}
      </header>
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 z-10 relative text-center">
        {status === AppStatus.SUCCESS && result ? (
          <ResultCard result={result} onReset={() => { setStatus(AppStatus.IDLE); setResult(null); }} />
        ) : (
          <div className="max-w-4xl w-full space-y-16">
            <div className="space-y-6">
              <h1 className="text-7xl md:text-[10rem] font-serif italic leading-[0.8] tracking-tighter">
                Which <span className="not-italic">Stacks</span> <br/> are you?
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                <div className="w-px h-24 bg-black hidden md:block"></div>
                <p className="text-black font-medium text-lg md:text-xl max-w-sm text-left leading-snug">
                  Interact with the Stacks blockchain to discover your on-chain soulmate, beautifully rendered in 8-bit.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <button onClick={handleReveal} disabled={status === AppStatus.INTERACTING || status === AppStatus.GENERATING}
                className="bg-black text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform disabled:opacity-50">
                {status === AppStatus.INTERACTING ? 'Signing...' : status === AppStatus.GENERATING ? 'Dreaming...' : 'Reveal Identity'}
              </button>
              <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">
                <span>Contract</span>
                <span className="w-8 h-px bg-black"></span>
                <a href="https://explorer.hiro.so/txid/SP1GVG84HRYCBYEW59M0S4XGQF8TTVXRF8XNXGBMH.pixel-identity?chain=mainnet" target="_blank" rel="noreferrer" className="bg-white/50 px-2 py-0.5 rounded border border-black/10 hover:opacity-70 transition-opacity">{TARGET_CONTRACT_ADDRESS.slice(0,6)}...PIXEL-IDENTITY</a>
              </div>
            </div>
            {status === AppStatus.ERROR && (
              <div className="mt-8 p-6 bg-white border-2 border-black shadow-[6px_6px_0px_0px_#000] text-black max-w-md mx-auto">
                <p className="font-bold text-red-600 uppercase tracking-widest text-xs mb-2">Error Detected</p>
                <p className="font-medium">{errorMsg}</p>
                <button onClick={() => setStatus(AppStatus.IDLE)} className="mt-4 text-xs font-bold underline">TRY AGAIN</button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
