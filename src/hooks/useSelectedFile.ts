import { useGeneratedFilesContext } from '../context/GeneratedFilesContext';

export function useSelectedFile() {
  const { selectedFile, setSelectedFile } = useGeneratedFilesContext();
  return { selectedFile, setSelectedFile };
}