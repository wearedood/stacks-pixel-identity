import { CRYPTO_PERSONAS, PixelArtResult } from '../types';

export const generatePixelArtIdentity = async (): Promise<PixelArtResult> => {
  const randomIndex = Math.floor(Math.random() * CRYPTO_PERSONAS.length);
  const selectedPersona = CRYPTO_PERSONAS[randomIndex];

  const response = await fetch('https://gemini-proxy.wearedood.workers.dev', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ persona: selectedPersona.name })
  });

  if (!response.ok) throw new Error('Failed to generate identity');

  const data = await response.json() as any;

  let imageUrl = '';
  if (data.candidates && data.candidates.length > 0) {
    const parts = data.candidates[0].content.parts;
    for (const part of parts) {
      if (part.inlineData && part.inlineData.data) {
        imageUrl = `data:image/png;base64,${part.inlineData.data}`;
        break;
      }
    }
  }

  if (!imageUrl) throw new Error('No image generated.');

  return {
    cryptoName: selectedPersona.name,
    trait: selectedPersona.trait,
    imageUrl: imageUrl
  };
};
