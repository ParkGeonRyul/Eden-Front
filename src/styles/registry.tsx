'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';
import { GlobalStyle } from './global';
import { theme } from './theme';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined')
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyle />
        {children}
        <Footer />
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        <Header />
        <GlobalStyle />
        {children}
        <Footer />
      </StyleSheetManager>
    </ThemeProvider>
  );
}
