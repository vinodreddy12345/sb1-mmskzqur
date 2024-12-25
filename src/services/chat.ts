import { Groq } from 'groq-sdk';
import { GROQ_CONFIG } from '../config/groq';
import type { Message } from '../types/chat';

const groqClient = new Groq({
  apiKey: GROQ_CONFIG.apiKey,
  dangerouslyAllowBrowser: true
});

export async function* streamChatCompletion(messages: Message[]) {
  const completion = await groqClient.chat.completions.create({
    model: GROQ_CONFIG.model,
    messages,
    ...GROQ_CONFIG.defaultParams
  });

  for await (const chunk of completion) {
    yield chunk.choices[0].delta.content || "";
  }
}