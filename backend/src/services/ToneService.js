// 
  export function detectTone(message) {
    const text = message.toLowerCase();
  
    if (
      message.length > 120 ||
      /please|could you|would you|kindly|i would like to/i.test(text)
    ) {
      return "formal";
    }
  
    if (/hey|hi|thanks|cool|awesome|lol|yeah/i.test(text)) {
      return "informal";
    }
  
    return "informal";
  }