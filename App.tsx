import React, { useState, useEffect } from 'react';
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
      setStatus(AppStatus.CONNECTING);
      const address = await connectWallet();
      setWalletAddress(address);
      setStatus(AppStatus.IDLE);
    } catch (err: any) {
      setErrorMsg(err.message);
      setStatus(AppStatus.ERROR);
    }
  };

  const handleInteraction = async () => {
    if (!walletAddress) {
      handleConnect();
      return;
    }
    setErrorMsg(null);
    try {
      setStatus(AppStatus.INTERACTING);
      const txHash = await sendInteractionTransaction(walletAddress);
      console.log("Transaction sent:", txHash);
      setStatus(AppStatus.GENERATING);
      const artResult = await generatePixelArtIdentity();
      setResult(artResult);
      setStatus(AppStatus.SUCCESS);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "Something went wrong.");
      setStatus(AppStatus.ERROR);
    }
  };

  const resetFlow = () => {
    setStatus(AppStatus.IDLE);
    setResult(null);
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#FF9900]">
      <header className="w-full px-6 py-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-1">
          <span className="font-bold text-xl ml-2 tracking-tight text-black">Stacks<span className="font-serif italic">Identity</span></span>
        </div>
        <div>
          {walletAddress ? (
            <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm font-bold text-black">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </div>
          ) : (
            <button onClick={handleConnect} className="text-sm font-bold text-black hover:text-neutral-600 underline decoration-2 underline-offset-4 decoration-black">
              Connect Wallet
            </button>
          )}
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 z-10">
        {status === AppStatus.SUCCESS && result ? (
          <ResultCard result={result} onReset={resetFlow} />
        ) : (
          <div className="max-w-4xl w-full text-center space-y-12">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-serif text-black leading-[0.9] tracking-tighter">
                Which <span className="italic">Stacks</span> <br/> are you?
              </h1>
              <p className="text-black font-medium text-lg md:text-xl max-w-lg mx-auto leading-relaxed border-l-2 border-black pl-6 text-left md:ml-[35%]">
                Interact with the Stacks blockchain to discover your on-chain soulmate, beautifully rendered in 8-bit.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Button 
                onClick={handleInteraction}
                isLoading={status === AppStatus.INTERACTING || status === AppStatus.GENERATING}
                className="text-xl px-16 py-6"
              >
                {status === AppStatus.INTERACTING ? 'Confirming...' : 
                 status === AppStatus.GENERATING ? 'Dreaming...' : 
                 'Reveal Identity'}
              </Button>
              
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black">
                <span>Contract</span>
                <span className="w-4 h-px bg-black"></span>
                <a 
                  href={`https://explorer.hiro.so/txid/${TARGET_CONTRACT_ADDRESS}?chain=mainnet`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-white px-2 py-0.5 border border-black rounded-sm hover:bg-black hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                   {TARGET_CONTRACT_ADDRESS.slice(0, 6)}...{TARGET_CONTRACT_ADDRESS.slice(-4)}
                </a>
              </div>
            </div>

            {status === AppStatus.ERROR && (
              <div className="mt-8 p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black text-sm max-w-md mx-auto relative">
                <p className="font-bold mb-1">Oops, something broke.</p>
                <p>{errorMsg}</p>
                <button onClick={resetFlow} className="mt-4 text-xs font-bold uppercase border-b border-black pb-0.5 hover:text-neutral-600">Try Again</button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
