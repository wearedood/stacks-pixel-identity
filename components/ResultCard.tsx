import React from 'react';
import { PixelArtResult } from '../types';

interface ResultCardProps {
  result: PixelArtResult;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  const appUrl = 'https://stacks-pixel-identity.vercel.app';

  const xShareText = encodeURIComponent(
    `Just discovered my on-chain identity on @Stacks ⚡\n\n${result.title ? result.title + ' — ' : ''}8-bit pixel art generated from my wallet on the Bitcoin layer.\n\nBuilt for the @StacksBuilder Rewards challenge 🧱\n\nFind yours 👇\n${appUrl}\n\n#Stacks #Bitcoin #Web3 #PixelArt`
  );

  const castShareText = encodeURIComponent(
    `Just discovered my on-chain identity on @stacks.btc ⚡\n\n${result.title ? result.title + ' — ' : ''}8-bit pixel art generated from my wallet on the Bitcoin layer.\n\nBuilt for the Stacks Builder Rewards challenge by @ddtrvlr\n\nFind yours 👇\n${appUrl}`
  );

  const xUrl = `https://twitter.com/intent/tweet?text=${xShareText}`;
  const castUrl = `https://warpcast.com/~/compose?text=${castShareText}`;

  const handleSave = () => {
    if (!result.imageUrl) return;
    const link = document.createElement('a');
    link.href = result.imageUrl;
    link.download = 'stacks-pixel-identity.png';
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-8 max-w-lg w-full mx-auto">
      {/* Identity Card */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] w-full p-6 space-y-4">
        <div className="text-center">
          <p className="font-mono uppercase tracking-[0.2em] text-xs opacity-50 mb-1">Your On-Chain Identity</p>
          {result.title && (
            <h2 className="text-2xl font-bold font-serif italic">{result.title}</h2>
          )}
        </div>

        {result.imageUrl && (
          <div className="flex justify-center">
            <img
              src={result.imageUrl}
              alt="Your Pixel Art Identity"
              className="w-64 h-64 object-contain border-2 border-black image-rendering-pixelated"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        )}

        {result.description && (
          <p className="text-sm text-center leading-relaxed opacity-80">{result.description}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {/* Save */}
        <button
          onClick={handleSave}
          className="flex-1 bg-white text-black border-2 border-black px-4 py-3 font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000]"
        >
          Save
        </button>

        {/* Post on X */}
        <a
          href={xUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-black text-white border-2 border-black px-4 py-3 font-bold text-sm uppercase tracking-widest hover:bg-[#FF9900] hover:text-black hover:border-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] text-center"
        >
          Post on X
        </a>

        {/* Cast on Farcaster */}
        <a
          href={castUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#8A63D2] text-white border-2 border-black px-4 py-3 font-bold text-sm uppercase tracking-widest hover:bg-[#FF9900] hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] text-center"
        >
          Cast
        </a>
      </div>

      {/* Reset */}
      <button
        onClick={onReset}
        className="text-xs font-mono uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity underline"
      >
        Try Again
      </button>
    </div>
  );
};

export default ResultCard;
