// type definition to solve type error on currentUser object

import { Listing, User } from '@prisma/client';

// type for safe listing

export type SafeListing = Omit<Listing, 'createdAt'> & {
  createdAt: string;
};

// types for safe user
export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
