import type { Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';
import { colors } from '@stylexjs/open-props/lib/colors.stylex';

import './globals.css';
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body {...stylex.props(styles.base)}>{children}</body>
    </html>
  );
}

const styles = stylex.create({
  base: {
    backgroundColor: colors.gray12,
  },
});
