import React from 'react';
import { PixelArtResult } from '../types';

interface ResultCardProps {
  result: PixelArtResult;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {

  const handleSave = () => {
    const link = document.createElement('a');
    link.href = result.imageUrl;
    link.download = `${result.cryptoName.replace(/ /g, '-')}-pixel-identity.png`;
    link.click();
  };

  const handlePost = () => {
    const text = `I just discovered my Stacks identity: ${result.cryptoName} — ${result.trait} ⚡️ #StacksIdentity #Bitcoin`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCast = () => {
    const text = `I just discovered my Stacks identity: ${result.cryptoName} — ${result.trait} ⚡️ @stacks #StacksIdentity`;
    window.open(`https://warpcast.com/~/compose?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto bg-white border-2 border-black p-4 md:p-8">
      <div className="relative aspect-square w-full mb-6 border-2 border-black bg-neutral-100 overflow-hidden">
        <img
          src={result.imageUrl}
          alt={`Pixel art of ${result.cryptoName}`}
          className="w-full h-full object-contain scale-90"
        />
      </div>
      <div className="text-center w-full mb-8">
        <h2 className="text-4xl font-serif font-bold mb-2">{result.cryptoName}</h2>
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">{result.trait}</p>
      </div>
      <div className="flex w-full gap-2 mb-6">
        <button onClick={handleSave} className="flex-1 py-3 px-2 border-2 border-black text-xs font-bold hover:bg-neutral-100">SAVE CARD</button>
        <button onClick={handlePost} className="flex-1 py-3 px-2 border-2 border-black text-xs font-bold hover:bg-neutral-100">POST</button>
        <button onClick={handleCast} className="flex-1 py-3 px-2 border-2 border-black text-xs font-bold hover:bg-neutral-100">CAST</button>
      </div>
      <p className="text-xs text-neutral-500 mb-6 text-center">Tip: Save the card image to attach it to your post!</p>
      <button onClick={onReset} className="w-full py-4 bg-black text-[#FF9900] font-bold text-lg hover:bg-neutral-800 transition-colors">
        Start Over →
      </button>
    </div>
  );
};

export default ResultCard;
