import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { queryClient } from '../../lib/react-query';

interface ICardWrapper {
  children: ReactNode;
}

export default function CardsWrapper({ children }: ICardWrapper) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
