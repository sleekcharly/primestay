// specify as client component
'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {};

const Logo = (props: Props) => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo1.png"
    />
  );
};

export default Logo;
