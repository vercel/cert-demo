import { Layout } from '#/ui/Layout';
import { Inter, Karla } from '@next/font/google';
import { AppProps } from 'next/app';
import 'styles/globals.css';

// vs manual font setup, we get:
// - significantly easier setup
// - automatic best practices
// - reduced layout shift
// - ...
const primaryFont = Inter({
  subsets: ['latin'],
  variable: '--primary-font',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${primaryFont.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
