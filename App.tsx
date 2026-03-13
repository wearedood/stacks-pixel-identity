import React, { useState, useEffect } from 'react';
import { connectWallet, sendInteractionTransaction } from './services/web3Service';
import { generatePixelArtIdentity } from './services/geminiService';
import { AppStatus, PixelArtResult, TARGET_CONTRACT_ADDRESS, TARGET_CONTRACT_NAME } from './types';
import Button from './components/Button';
import ResultCard from './components/ResultCard';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [result, setResult] = useState<PixelArtResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleConnect = () => {
    setStatus(AppStatus.CONNECTING);
    connectWallet((address) => {
      setWalletAddress(address);
      setStatus(AppStatus.IDLE);
    });
  };

  const handleInteraction = async () => {
    if (!walletAddress) {
      handleConnect();
      return;
    }

    setErrorMsg(null);
    setStatus(AppStatus.INTERACTING);

    try {
      await sendInteractionTransaction(
        async (txId) => {
          console.log("Transaction sent:", txId);
          // 2. Generate Content
          setStatus(AppStatus.GENERATING);
          try {
            const artResult = await generatePixelArtIdentity();
            setResult(artResult);
            setStatus(AppStatus.SUCCESS);
          } catch (err: any) {
            setErrorMsg(err.message || "AI Generation failed.");
            setStatus(AppStatus.ERROR);
          }
        },
        () => {
          setStatus(AppStatus.IDLE);
        }
      );
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "Something went wrong during the interaction.");
      setStatus(AppStatus.ERROR);
    }
  };

  const resetFlow = () => {
    setStatus(AppStatus.IDLE);
    setResult(null);
    setErrorMsg(null);
  };

  return (
    <div classname="min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div classname="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-50 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div classname="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply opacity-20 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      {/* Header */}
      <header classname="w-full px-6 py-8 flex justify-between items-center z-10">
        <div classname="flex items-center gap-1">
          {/* Stacks Logo Approximation */}
          <div classname="flex gap-0.5">
            <div classname="w-6 h-6 rounded-full border-4 border-black"></div>
            <div classname="w-6 h-6 rounded-full bg-black -ml-3 mix-blend-multiply"></div>
          </div>
          <span classname="font-bold text-xl ml-2 tracking-tight">Stacks<span classname="font-serif italic">Identity</span></span>
        </div>
        <div>
          {walletAddress ? (
            <div classname="flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm font-bold text-black transition-transform hover:-translate-y-0.5">
              <span classname="w-2 h-2 bg-orange-500 rounded-full"></span>
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </div>
          ) : (
            <button onclick="{handleConnect}" classname="text-sm font-bold text-black hover:text-neutral-600 transition-colors underline decoration-2 underline-offset-4 decoration-black">
              Connect Wallet
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main classname="flex-grow flex flex-col items-center justify-center px-4 py-12 z-10">
        
        {status === AppStatus.SUCCESS && result ? (
          <resultcard result="{result}" onreset="{resetFlow}"/>
        ) : (
          <div classname="max-w-4xl w-full text-center space-y-12">
            
            <div classname="space-y-6">
              <h1 classname="text-6xl md:text-8xl font-serif text-black leading-[0.9] tracking-tighter">
                Which <span classname="italic">Stacks</span> <br/> are you?
              </h1>
              <p classname="text-black font-medium text-lg md:text-xl max-w-lg mx-auto leading-relaxed border-l-2 border-black pl-6 text-left md:ml-[35%]">
                Interact with the Stacks blockchain to discover your on-chain soulmate, beautifully rendered in 8-bit.
              </p>
            </div>

            <div classname="flex flex-col items-center gap-6">
              <button onclick="{handleInteraction}" isloading="{status" =="=" appstatus.interacting="" ||="" status="==" appstatus.generating}="" classname="text-xl px-16 py-6">
                {status === AppStatus.INTERACTING ? 'Confirming...' : 
                 status === AppStatus.GENERATING ? 'Dreaming...' : 
                 'Reveal Identity'}
              </Button>
              
              <div classname="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-600">
                <span>Contract</span>
                <span classname="w-4 h-px bg-black"></span>
                <a href="{`https://explorer.hiro.so/identities/${TARGET_CONTRACT_ADDRESS}.${TARGET_CONTRACT_NAME}?chain=mainnet`}" target="_blank" rel="noopener noreferrer" classname="bg-white px-2 py-0.5 border border-black rounded-sm hover:bg-black hover:text-[#FF9900] transition-colors cursor-pointer">
                   {TARGET_CONTRACT_ADDRESS.slice(0, 6)}...{TARGET_CONTRACT_NAME}
                </a>
              </div>
            </div>

            {status === AppStatus.ERROR && (
              <div classname="mt-8 p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black text-sm max-w-md mx-auto relative">
                 <div classname="absolute -top-3 -left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase transform -rotate-3">Error</div>
                <p classname="font-bold mb-1">Oops, something broke.</p>
                <p>{errorMsg}</p>
                <button onclick="{resetFlow}" classname="mt-4 text-xs font-bold uppercase border-b border-black pb-0.5 hover:text-neutral-600">Try Again</button>
              </div>
            )}
            
            {(status === AppStatus.INTERACTING || status === AppStatus.GENERATING) && (
              <div classname="mt-8 flex justify-center">
                 <div classname="bg-white border border-black px-6 py-2 rounded-full flex items-center gap-3 shadow-lg">
                    <div classname="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                    <div classname="w-2 h-2 bg-black rounded-full animate-bounce delay-75"></div>
                    <div classname="w-2 h-2 bg-black rounded-full animate-bounce delay-150"></div>
                 </div>
              </div>
            )}

          </div>
        )}

      </main>

      {/* Footer */}
      <footer classname="w-full py-6 text-center border-t border-black/10">
         <div classname="flex justify-center items-center gap-8 text-sm font-medium">
            <span classname="hover:italic cursor-pointer">Stacks Foundation</span>
            <span classname="w-1 h-1 bg-black rounded-full"></span>
            <span classname="hover:italic cursor-pointer">Builders</span>
            <span classname="w-1 h-1 bg-black rounded-full"></span>
            <span classname="hover:italic cursor-pointer">Bitcoin L2</span>
         </div>
         <p classname="text-[10px] text-neutral-500 mt-4 uppercase tracking-widest">Powered by Dood</p>
      </footer>
    </div>
  );
};

export default App;
