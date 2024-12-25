import { useRef, useEffect } from 'react';

export function useScrollToBottom<T extends HTMLElement>(deps: any[]) {
  const ref = useRef<T>(null);

  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, deps);

  return ref;
}