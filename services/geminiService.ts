import { CRYPTO_PERSONAS, PixelArtResult } from '../types';

export const generatePixelArtIdentity = async (): Promise<PixelArtResult> => {
  const randomIndex = Math.floor(Math.random() * CRYPTO_PERSONAS.length);
  const selectedPersona = CRYPTO_PERSONAS[randomIndex];

  const response = await fetch('https://pixel-identity-proxy.wearedood.workers.dev', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ persona: selectedPersona.name })
  });

  if (!response.ok) throw new Error('Failed to generate identity');

  const data = await response.json() as any;
  if (!data.imageUrl) throw new Error('No image generated.');

  return {
    cryptoName: selectedPersona.name,
    trait: selectedPersona.trait,
    imageUrl: data.imageUrl
  };
};
