import { GoogleGenAI } from "@google/genai";
import { CRYPTO_PERSONAS, PixelArtResult } from '../types';

export const generatePixelArtIdentity = async (): Promise<pixelartresult> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // 1. Select a random persona
  const randomIndex = Math.floor(Math.random() * CRYPTO_PERSONAS.length);
  const selectedPersona = CRYPTO_PERSONAS[randomIndex];

  // 2. Generate Image
  const prompt = `Generate a high-quality, 8-bit pixel art icon representing a "Bitcoin Cyber-Identity" based on the persona "${selectedPersona.name}". 
  The character should be a futuristic fusion of a cybernetic entity and a Bitcoin miner.
  Use a strict color palette of Bitcoin Orange (#FF9900), Pure Black (#000000), and Pure White (#FFFFFF).
  The style should be sharp 8-bit pixel art, retro video game aesthetic, perfectly centered on a solid black background. 
  Do not include any text, letters, or numbers in the image. 
  The final result should look like a legendary on-chain collectible artifact from the Bitcoin Layer 2 ecosystem.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
            aspectRatio: "1:1"
        }
      }
    });

    // Extract image
    let imageUrl = '';
    // The response might be complex, we iterate to find the inline data
    if (response.candidates && response.candidates.length > 0) {
        const parts = response.candidates[0].content.parts;
        for (const part of parts) {
            if (part.inlineData && part.inlineData.data) {
                imageUrl = `data:image/png;base64,${part.inlineData.data}`;
                break;
            }
        }
    }

    if (!imageUrl) {
        throw new Error("No image generated.");
    }

    return {
      cryptoName: selectedPersona.name,
      trait: selectedPersona.trait,
      imageUrl: imageUrl
    };

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw new Error("Failed to generate pixel art identity.");
  }
};