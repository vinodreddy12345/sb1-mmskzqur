export interface FileStructure {
  path: string;
  content: string;
  type: 'file' | 'directory';
  children?: FileStructure[];
}

export interface GeneratedProject {
  files: FileStructure[];
  preview?: {
    port: number;
    entry: string;
  };
}