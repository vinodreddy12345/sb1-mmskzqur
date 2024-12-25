import { streamChatCompletion } from './chat';
import type { Message } from '../types/chat';
import { SYSTEM_PROMPTS } from '../config/prompts';

export interface GeneratedFile {
  path: string;
  content: string;
}

export interface CodeGeneration {
  files: GeneratedFile[];
  instructions: string;
}

export async function* generateCode(prompt: string) {
  const messages: Message[] = [
    { role: 'system', content: SYSTEM_PROMPTS.websiteBuilder },
    { role: 'user', content: prompt }
  ];

  const stream = streamChatCompletion(messages);
  for await (const chunk of stream) {
    yield chunk;
  }
}