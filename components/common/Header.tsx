'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import NavLinks from './NavLinks';
import Chat from '@/app/chat/page'

const Header: React.FC = () => {
  return (
    <header className="bg-[linear-gradient(to_right,#004366,#016C90,#0098B2)] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo + Info */}
        <div className="flex items-center space-x-4">
          <Image 
            src="/images/img_logohaf_1.png" 
            alt="HAF-TECH Logo" 
            width={100} 
            height={100}
            className="rounded-full object-cover"
          />
          <div className="text-black">
            <h1 className="text-2xl font-bold font-koulen">HAF - TECH</h1>            
          </div>
          <div className='text-white'>
            <p className="text-sm">Jln. Pelita I No 14/29 Labuhan Ratu B. Lampung</p>
            <p className="text-sm">Google Maps: haf tech computer</p>
            <p className="text-sm">Wa: 085269635353</p></div>
          
        </div>
        <NavLinks />

        {/* Tombol Chat Penjual */}
      <Link href="./app/chat">
      <Button className="bg-[#08C6EC] hover:bg-[#0ba5d8] text-white px-4 py-2 text-sm rounded-md transition">
       Chat Penjual
      </Button>
      </Link>
      </div>
    </header>
  );
};

export default Header;
