import React from 'react';
import { FileText } from 'lucide-react';

interface CodePreviewProps {
  content: string;
}

export function CodePreview({ content }: CodePreviewProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm overflow-auto">
      <div className="flex items-center gap-2 mb-4 text-gray-400 border-b border-gray-700 pb-2">
        <FileText size={16} />
        <span>Generated Code</span>
      </div>
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  );
}