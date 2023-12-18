import React, { FC, ReactNode } from 'react';

import './globals.css'
import { Header } from './header/Header';

type Props = {
  children: ReactNode;
  title?: string;
};

const RootLayout: FC<Props> = ({ children, title = 'Mexi' }) => {
  return (
    <html lang="no">
      <head>
        <title>{title}</title>
      </head>
      <body>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
      <footer>
        {/* Your footer content goes here */}
      </footer>
      </body>
    </html>
  );
};

export default RootLayout;