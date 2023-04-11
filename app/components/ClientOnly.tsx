'use client';

/* Component to check if the page has mounted */
import React, { useEffect, useState } from 'react';

// set interface
interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  // set compoonent state
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // conditional to check if the page has mounted
  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
