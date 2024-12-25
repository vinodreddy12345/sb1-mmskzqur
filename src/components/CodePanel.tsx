import React from 'react';
import { useSelectedFile } from '../hooks/useSelectedFile';

export function CodePanel() {
  const { selectedFile } = useSelectedFile();

  if (!selectedFile) {
    return (
      <div className="bg-gray-800 rounded-lg p-4">
        <p className="text-gray-400">Select a file to view code</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-2 bg-gray-700 text-sm">
        {selectedFile.path}
      </div>
      <pre className="p-4 overflow-auto">
        <code>{selectedFile.content}</code>
      </pre>
    </div>
  );
}