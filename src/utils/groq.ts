import { Groq } from 'groq-sdk';

const GROQ_API_KEY = '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';

export const groqClient = new Groq({
  apiKey: GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Enable browser usage
});

export async function* streamCompletion(messages: { role: string; content: string }[]) {
  const completion = await groqClient.chat.completions.create({
    model: "llama-3.1-70b-versatile",
    messages,
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
    stop: null,
  });

  for await (const chunk of completion) {
    yield chunk.choices[0].delta.content || "";
  }
}