import { ReactNode } from 'react';

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <>
      <h1>Navbar</h1>
      {children}
    </>
  );
}

export default Navbar;
