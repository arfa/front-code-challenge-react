import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header.component';
import { Container, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from '@/theme';
import Footer from '@/components/footer.component';
import homeJson from '@/data/index.json';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Valtech Front Challenge',
  description: 'Valtech react front challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Container sx={{ mt: 4 }}>{children}</Container>
            <Footer background={homeJson.footer.background} text={homeJson.footer.text} />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
