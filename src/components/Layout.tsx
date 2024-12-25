import React from 'react';
import { Sidebar } from './Sidebar';
import { CodePanel } from './CodePanel';
import { PreviewPanel } from './PreviewPanel';

export function Layout() {
  return (
    <div className="h-screen bg-gray-900 text-white flex">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 grid grid-cols-2 gap-4 p-4">
          <CodePanel />
          <PreviewPanel />
        </div>
      </main>
    </div>
  );
}