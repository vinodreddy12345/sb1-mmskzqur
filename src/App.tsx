import React from 'react';
import { Layout } from './components/Layout';
import { GeneratedFilesProvider } from './context/GeneratedFilesContext';

export default function App() {
  return (
    <GeneratedFilesProvider>
      <Layout />
    </GeneratedFilesProvider>
  );
}