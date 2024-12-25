import { useGeneratedFilesContext } from '../context/GeneratedFilesContext';

export function useGeneratedFiles() {
  const { files, setFiles } = useGeneratedFilesContext();
  return { files, setFiles };
}