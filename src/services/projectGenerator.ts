import { GeneratedFile } from '../types/files';

export function parseGeneratedContent(content: string): GeneratedFile[] {
  const files: GeneratedFile[] = [];
  let currentFile: GeneratedFile | null = null;
  let isInCodeBlock = false;
  let codeBlockLang = '';
  
  const lines = content.split('\n');
  
  for (const line of lines) {
    if (line.startsWith('**') && line.endsWith('**')) {
      const path = line.replace(/\*\*/g, '').trim();
      currentFile = {
        path,
        content: '',
        type: 'file'
      };
      files.push(currentFile);
    } else if (line.startsWith('```')) {
      if (!isInCodeBlock) {
        codeBlockLang = line.slice(3);
      }
      isInCodeBlock = !isInCodeBlock;
    } else if (isInCodeBlock && currentFile) {
      currentFile.content += line + '\n';
    }
  }

  // Create index.html if it doesn't exist
  if (!files.find(f => f.path === 'index.html')) {
    const htmlFile = generateIndexHtml(files);
    files.push(htmlFile);
  }

  return files;
}

function generateIndexHtml(files: GeneratedFile[]): GeneratedFile {
  const cssFile = files.find(f => f.path.endsWith('.css'));
  const jsFile = files.find(f => f.path.endsWith('.js'));

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>
    ${cssFile ? `<style>${cssFile.content}</style>` : ''}
</head>
<body>
    ${files.find(f => f.path === 'body.html')?.content || ''}
    ${jsFile ? `<script>${jsFile.content}</script>` : ''}
</body>
</html>`;

  return {
    path: 'index.html',
    content: html,
    type: 'file'
  };
}