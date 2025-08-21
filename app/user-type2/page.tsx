import React from 'react';
import UserType2Layout from '@/components/layouts/UserType2Layout';


export const metadata = {
  title: 'User Type 2',
  description: 'User Type 2 page',
};

export default function UserType1Page() {
  return (
    <div className="mx-auto bg-[#29252D]">
      <UserType2Layout />
    </div>
  );
}

