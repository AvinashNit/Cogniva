// // export function detectEmotion(message) {
// //     if (/angry|frustrated|upset/i.test(message)) return "negative";
// //     if (/happy|thanks|love/i.test(message)) return "positive";
// //     return "neutral";
// //   }
// //   /**
// //  * Detects nuanced emotional state from user message.
// //  * Returns a structured but lightweight emotion object.
// //  */
// export function detectEmotion(message) {
//   const text = message.toLowerCase();

//   // Negative emotions
//   if (/frustrated|annoyed|angry|upset|irritated|this isn't working|keeps failing/.test(text)) {
//     return {
//       category: "negative",
//       primary: "frustration",
//       intensity: 0.8,
//       need: "guidance"
//     };
//   }

//   if (/worried|anxious|not sure|confused|i don't know|uncertain/.test(text)) {
//     return {
//       category: "negative",
//       primary: "anxiety",
//       intensity: 0.6,
//       need: "reassurance"
//     };
//   }

//   // Positive emotions
//   if (/thanks|thank you|appreciate|helpful|love this|great/.test(text)) {
//     return {
//       category: "positive",
//       primary: "gratitude",
//       intensity: 0.7,
//       need: "reinforcement"
//     };
//   }

//   // Curiosity / neutral-positive
//   if (/curious|just wondering|can you explain|how does/.test(text)) {
//     return {
//       category: "neutral",
//       primary: "curiosity",
//       intensity: 0.4,
//       need: "information"
//     };
//   }

//   // Default
//   return {
//     category: "neutral",
//     primary: "neutral",
//     intensity: 0.2,
//     need: "information"
//   };
// }
// /**
//  * Runtime emotion analysis.
//  * DO NOT persist this object directly to DB.
//  */
export function detectEmotion(message) {
  const text = message.toLowerCase();

  if (/frustrated|annoyed|angry|upset|irritated|keeps failing|not working/.test(text)) {
    return {
      primary: "frustration",
      category: "negative",
      intensity: 0.8,
      need: "guidance"
    };
  }

  if (/worried|anxious|confused|not sure|i don't know/.test(text)) {
    return {
      primary: "anxiety",
      category: "negative",
      intensity: 0.6,
      need: "reassurance"
    };
  }

  if (/thanks|thank you|appreciate|helpful|great/.test(text)) {
    return {
      primary: "gratitude",
      category: "positive",
      intensity: 0.7,
      need: "reinforcement"
    };
  }

  if (/curious|how does|can you explain|what is/.test(text)) {
    return {
      primary: "curiosity",
      category: "neutral",
      intensity: 0.4,
      need: "information"
    };
  }

  return {
    primary: "neutral",
    category: "neutral",
    intensity: 0.2,
    need: "information"
  };
}

