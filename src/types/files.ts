export interface GeneratedFile {
  path: string;
  content: string;
  type: 'file' | 'directory';
}

export interface FileState {
  files: GeneratedFile[];
  selectedFile: GeneratedFile | null;
}