import React from 'react';
import { File, Folder } from 'lucide-react';
import { useGeneratedFiles } from '../hooks/useGeneratedFiles';
import { useSelectedFile } from '../hooks/useSelectedFile';
import type { GeneratedFile } from '../types/files';

export function FileTree() {
  const { files } = useGeneratedFiles();
  const { selectedFile, setSelectedFile } = useSelectedFile();

  if (!files.length) {
    return (
      <div className="p-4">
        <p className="text-gray-400 text-sm">No files generated yet</p>
      </div>
    );
  }

  const handleFileSelect = (file: GeneratedFile) => {
    setSelectedFile(file);
  };

  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold mb-2 text-gray-400">Project Files</h3>
      <div className="space-y-1">
        {files.map((file, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-800 ${
              selectedFile?.path === file.path ? 'bg-gray-800' : ''
            }`}
            onClick={() => handleFileSelect(file)}
          >
            {file.type === 'directory' ? (
              <Folder size={16} className="text-blue-400" />
            ) : (
              <File size={16} className="text-gray-400" />
            )}
            <span className="text-sm">{file.path}</span>
          </div>
        ))}
      </div>
    </div>
  );
}