import { Jost } from 'next/font/google';
import Link from 'next/link';
import { Header } from './Header';

export const siteTitle = 'KENGO';
const jost = Jost({ subsets: ['latin'], weight: ['400', '500'] });

type Props = { home?: boolean };

export const Layout: React.FC<Props> = ({ children, home }) => {
  return (
    <div className={`${jost.className} flex-col`}>
      <Header />
      <main className='container m-auto'>{children}</main>
      <footer className='h-20'>
        {!home && (
          <div className='mt-10 pt-4 text-center'>
            <Link href='/' className='text-cream text-lg'>
              Home
            </Link>
          </div>
        )}
      </footer>
    </div>
  );
};
