import React from 'react';
import { Play } from 'lucide-react';

interface PreviewProps {
  files: { path: string; content: string }[];
}

export function Preview({ files }: PreviewProps) {
  const htmlFile = files.find(f => f.path === 'index.html');
  const iframeContent = htmlFile?.content || '';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-800 p-2 flex items-center gap-2">
        <Play size={16} className="text-green-400" />
        <span className="text-white text-sm">Live Preview</span>
      </div>
      <iframe
        srcDoc={iframeContent}
        className="w-full h-[500px] border-0"
        title="Preview"
        sandbox="allow-scripts"
      />
    </div>
  );
}