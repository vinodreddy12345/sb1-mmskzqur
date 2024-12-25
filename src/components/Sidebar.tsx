import React from 'react';
import { FileTree } from './FileTree';
import { ChatInput } from './ChatInput';
import { useChat } from '../hooks/useChat';

export function Sidebar() {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <div className="w-64 border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">Website Builder</h1>
      </div>
      <div className="flex-1 overflow-auto">
        <FileTree />
      </div>
      <div className="p-4 border-t border-gray-800">
        <ChatInput 
          onSend={sendMessage} 
          disabled={isLoading}
          placeholder="Describe your website..."
        />
      </div>
    </div>
  );
}