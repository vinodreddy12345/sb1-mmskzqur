import { useState } from 'react';
import { streamChatCompletion } from '../services/chat';
import { parseGeneratedContent } from '../services/projectGenerator';
import { useGeneratedFiles } from './useGeneratedFiles';
import { SYSTEM_PROMPTS } from '../config/prompts';
import type { Message } from '../types/chat';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setFiles } = useGeneratedFiles();

  const sendMessage = async (content: string) => {
    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const stream = streamChatCompletion([
        { role: 'system', content: SYSTEM_PROMPTS.websiteBuilder },
        userMessage
      ]);

      let fullContent = '';
      for await (const chunk of stream) {
        fullContent += chunk;
        setMessages(prev => [
          ...prev.slice(0, -1),
          { role: 'assistant', content: fullContent }
        ]);
      }

      const files = parseGeneratedContent(fullContent);
      setFiles(files);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, sendMessage };
}