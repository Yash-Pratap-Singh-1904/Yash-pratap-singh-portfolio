import React from 'react';
import { Container } from '../components/ui/Container';

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main className="w-full min-h-screen lg:pl-64 xl:pl-72 flex flex-col justify-between">
      <Container size="lg" className="flex-1 w-full pt-4 lg:pt-8">
        {children}
      </Container>
    </main>
  );
};
