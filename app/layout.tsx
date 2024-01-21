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
        <main className="min-h-screen min-w-screen">{children}</main>
        <footer>{/* Your footer content goes here */}</footer>
      </body>
    </html>
  );
};

export default RootLayout;
