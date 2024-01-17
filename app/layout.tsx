import React, { FC, ReactNode } from 'react';

import './globals.css';
import { Header } from './header/Header';

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="no">
      <head>
        <title>Mexi</title>
      </head>
      <body>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between overflow-y-auto">
          {children}
        </main>
        <footer>{/* Your footer content goes here */}</footer>
      </body>
    </html>
  );
};

export default RootLayout;
