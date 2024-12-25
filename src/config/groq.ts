// Groq configuration
export const GROQ_CONFIG = {
  apiKey: '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',
  model: "llama-3.1-70b-versatile",
  defaultParams: {
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
    stop: null,
  }
} as const;