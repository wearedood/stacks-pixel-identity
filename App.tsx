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

  const handleInteraction = async () => {
    try {
      setErrorMsg(null);
      let currentAddress = walletAddress;
      
      if (!currentAddress) {
        setStatus(AppStatus.CONNECTING);
        currentAddress = await connectWallet();
        setWalletAddress(currentAddress);
      }

      setStatus(AppStatus.INTERACTING);
      const hash = await sendInteractionTransaction(currentAddress);
      console.log("TX:", hash);
      
      setStatus(AppStatus.GENERATING);
      const art = await generatePixelArtIdentity();
      setResult(art);
      setStatus(AppStatus.SUCCESS);
    } catch (err: any) {
      console.error("Bug:", err);
      setStatus(AppStatus.ERROR);
      setErrorMsg(err.message || "Transaction error");
    }
  };

  return (
    <div className="min-h-screen bg-[#FF9900] flex flex-col font-sans text-black">
      <header className="p-6 flex justify-between items-center">
        <span className="font-bold text-xl italic">StacksIdentity</span>
        {walletAddress && <div className="bg-white px-4 py-1 border-2 border-black font-bold text-xs">{walletAddress.slice(0,6)}...</div>}
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        {status === AppStatus.SUCCESS && result ? (
          <ResultCard result={result} onReset={() => { setStatus(AppStatus.IDLE); setResult(null); }} />
        ) : (
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-serif italic leading-none">Which Stacks are you?</h1>
            <Button onClick={handleInteraction} isLoading={status === AppStatus.INTERACTING || status === AppStatus.GENERATING} className="text-2xl px-12 py-6">
              {status === AppStatus.INTERACTING ? 'Signing...' : status === AppStatus.GENERATING ? 'Generating...' : 'Reveal Identity'}
            </Button>
            <div className="text-[10px] font-mono opacity-50 uppercase tracking-widest">Contract: {TARGET_CONTRACT_ADDRESS}</div>
            {status === AppStatus.ERROR && <div className="p-4 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] font-bold text-red-600">{errorMsg}</div>}
          </div>
        )}
      </main>
    </div>
  );
};
export default App;
