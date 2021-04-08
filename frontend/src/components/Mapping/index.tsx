import { ReactNode } from 'react';

interface MappingProps {
  children: ReactNode;
}

function Mapping({ children }: MappingProps) {
  return (
    <>
      <h1>Mapping</h1>
      {children}
    </>
  );
}

export default Mapping;
