/* eslint-disable @next/next/no-sync-scripts */
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
        <script
          src="https://kit.fontawesome.com/701c0b74f9.js"
          crossOrigin="anonymous"
        ></script>
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
