import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-screen h-screen flex-1 flex-col flex backgroundmain'>
      <Header />
     <div>
      {children}
     </div>
      <Footer />
    </div>
  );
};

export default Layout;
