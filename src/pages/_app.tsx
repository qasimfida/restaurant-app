import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MenuContextProvider } from '@/contexts/MenuContext';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />
    </MenuContextProvider>
  );
}
