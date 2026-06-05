
/**
 * Text-to-Speech Service using the browser's native Web Speech API.
 * This does not require external API keys and uses the OS/Browser provided voices
 * (e.g., Google US English).
 */

export const speakText = (text: string) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Text-to-speech not supported in this browser.');
    return;
  }

  // Cancel any currently playing speech to avoid overlap
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Settings based on requirements:
  // Rate: 0.9 - 1.1 (Set to 0.95 for clear educational playback)
  utterance.rate = 0.95; 
  
  // Pitch: 1 is baseline. Adjusted slightly for natural feel.
  utterance.pitch = 0.5; 
  
  // Volume: 1 is max.
  utterance.volume = 0.6;

  // Attempt to select a high-quality English voice
  const voices = window.speechSynthesis.getVoices();
  
  // Preference order: Google US English → Microsoft Zira → Any English
  const preferredVoice = voices.find(voice => 
    voice.name.includes("Google US English") || 
    voice.name.includes("Zira") || 
    (voice.lang.startsWith("en") && voice.name.includes("Female"))
  );

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
