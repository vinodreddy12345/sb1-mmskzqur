import React, { useEffect, useRef } from 'react';
import { useGeneratedFiles } from '../hooks/useGeneratedFiles';
import { Play } from 'lucide-react';

export function PreviewPanel() {
  const { files } = useGeneratedFiles();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const htmlFile = files.find(f => f.path === 'index.html');

  useEffect(() => {
    if (htmlFile && iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.srcdoc = htmlFile.content;
    }
  }, [htmlFile]);

  if (!htmlFile) {
    return (
      <div className="bg-gray-800 rounded-lg p-4">
        <p className="text-gray-400">Generate a website to see preview</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col">
      <div className="p-2 bg-gray-700 text-sm flex items-center gap-2">
        <Play size={16} className="text-green-400" />
        <span>Live Preview</span>
      </div>
      <iframe
        ref={iframeRef}
        className="flex-1 w-full bg-white"
        title="Preview"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}