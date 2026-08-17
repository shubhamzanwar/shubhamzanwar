import Link from 'next/link';
import Script from 'next/script';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
});

export const metadata = {
  metadataBase: new URL('https://shubhamzanwar.com'),
  title: {
    default: "Shubham Zanwar's Portfolio",
    template: '%s - Shubham Zanwar',
  },
  description: 'blog and personal portfolio website of Shubham Zanwar',
  openGraph: {
    title: "Shubham Zanwar's Portfolio",
    description: 'blog and personal portfolio website of Shubham Zanwar',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} text-[12px] min-[1175px]:text-[16px]`}>
      <body className="font-sans leading-normal text-black antialiased">
        <div className="mx-auto flex min-h-screen w-full max-w-[1280px] flex-col px-8">
          <header className="mt-12 mb-5 flex h-7 items-center justify-between">
            <Link href="/" className="text-[1.75rem] font-normal">
              SZ
            </Link>
            <nav className="flex items-center">
              <Link href="/blog" className="mr-4 text-[1.3rem] font-normal">
                Blog
              </Link>
              <Link href="/projects" className="mr-4 text-[1.3rem] font-normal">
                Projects
              </Link>
            </nav>
          </header>
          <main className="flex flex-1 flex-col">{children}</main>
          <footer className="pt-4 pb-12 text-[0.8rem] text-[#999]">© Shubham Zanwar</footer>
        </div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=UA-177856420-1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-177856420-1');
          `}
        </Script>
      </body>
    </html>
  );
}
