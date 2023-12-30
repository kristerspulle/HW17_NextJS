'use client';

import { SessionProvider } from 'next-auth/react';

export const Provider = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>{children}</SessionProvider>
);
