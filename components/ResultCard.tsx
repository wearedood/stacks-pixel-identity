import React, { useRef } from 'react';
import { PixelArtResult } from '../types';

interface ResultCardProps {
  result: PixelArtResult;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const appUrl = 'https://stacks-pixel-identity.vercel.app';

  const xShareText = encodeURIComponent(
    `Just discovered my on-chain identity on @Stacks ⚡\n\n${result.cryptoName} — 8-bit pixel art generated from my wallet on the Bitcoin layer.\n\nBuilt for the @StacksBuilder Rewards challenge 🧱\n\nFind yours 👇\n${appUrl}\n\n#Stacks #Bitcoin #Web3 #PixelArt`
  );

  const castShareText = encodeURIComponent(
    `Just discovered my on-chain identity on @stacks.btc ⚡\n\n${result.cryptoName} — 8-bit pixel art generated from my wallet on the Bitcoin layer.\n\nBuilt for the Stacks Builder Rewards challenge by @ddtrvlr\n\nFind yours 👇\n${appUrl}`
  );

  const xUrl = `https://twitter.com/intent/tweet?text=${xShareText}`;
  const castUrl = `https://warpcast.com/~/compose?text=${castShareText}`;

  const handleSave = async () => {
    if (!cardRef.current) return;
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });
      const link = document.createElement('a');
      link.download = 'stacks-pixel-identity.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      if (!result.imageUrl) return;
      const link = document.createElement('a');
      link.href = result.imageUrl;
      link.download = 'stacks-pixel-identity.png';
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">

      {/* Card — capturable area */}
      <div ref={cardRef} className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] w-full">

        {/* Image with inner frame */}
        {result.imageUrl && (
          <div className="m-4 border-4 border-black">
            <img
              src={result.imageUrl}
              alt="Your Pixel Art Identity"
              className="w-full object-contain"
              style={{ imageRendering: 'pixelated', display: 'block' }}
            />
          </div>
        )}

        {/* Title & subtitle */}
        <div className="text-center px-6 pb-6">
          <h2 className="text-3xl font-black tracking-tight">{result.cryptoName}</h2>
          <p className="font-mono uppercase tracking-[0.2em] text-xs opacity-50 mt-1">{result.trait}</p>
        </div>

        {/* Buttons inside card */}
        <div className="flex border-t-4 border-black">
          <button
            onClick={handleSave}
            className="flex-1 py-4 font-bold text-xs uppercase tracking-widest border-r-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Save Card
          </button>
          <a
            href={xUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-4 font-bold text-xs uppercase tracking-widest border-r-2 border-black hover:bg-black hover:text-white transition-colors text-center"
          >
            Post
          </a>
          <a
            href={castUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-4 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-center"
          >
            Cast
          </a>
        </div>

        {/* Tip */}
        <p className="text-center text-xs opacity-40 py-3 border-t-2 border-black/10">
          Tip: Save the card image to attach it to your post!
        </p>
      </div>

      {/* Start Over */}
      <button
        onClick={onReset}
        className="w-full bg-black text-[#FF9900] py-5 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
      >
        Start Over →
      </button>

    </div>
  );
};

export default ResultCard;
