import React, { FC, ReactNode } from 'react';
import Head from 'next/head';

import './globals.css'
import { Header } from './header/Header';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const RootLayout: FC<LayoutProps> = ({ children, title = 'Mexi' }) => {
  return (
    <html lang="no">
      <Head>
        <title>{title}</title>
      </Head>
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