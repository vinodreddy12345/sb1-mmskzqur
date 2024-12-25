import React, { createContext, useContext, useState } from 'react';
import type { GeneratedFile, FileState } from '../types/files';

interface GeneratedFilesContextType extends FileState {
  setFiles: (files: GeneratedFile[]) => void;
  setSelectedFile: (file: GeneratedFile | null) => void;
}

const GeneratedFilesContext = createContext<GeneratedFilesContextType | null>(null);

export function GeneratedFilesProvider({ children }: { children: React.ReactNode }) {
  const [files, setFiles] = useState<GeneratedFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<GeneratedFile | null>(null);

  return (
    <GeneratedFilesContext.Provider value={{
      files,
      selectedFile,
      setFiles,
      setSelectedFile,
    }}>
      {children}
    </GeneratedFilesContext.Provider>
  );
}

export function useGeneratedFilesContext() {
  const context = useContext(GeneratedFilesContext);
  if (!context) {
    throw new Error('useGeneratedFilesContext must be used within a GeneratedFilesProvider');
  }
  return context;
}