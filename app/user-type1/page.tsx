import React from 'react';
import UserType1Layout from '@/components/layouts/UserType1Layout';

export const metadata = {
  title: 'User Type 1',
  description: 'User Type 1 page',
};

export default function UserType1Page() {
  return (
    <div className="mx-auto bg-[#29252D]">
      <UserType1Layout />
    </div>
  );
}

