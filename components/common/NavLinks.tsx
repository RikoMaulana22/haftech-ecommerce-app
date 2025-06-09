'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { name: 'Beranda', href: '/' },
    { name: 'Product', href: '/produk' },
    { name: 'Contact', href: '/ulasan' },
    { name: 'Category', href: '/kategori' },
  ];

  return (
    <nav className=" px-6 flex space-x-9 items-center">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-l font-semibold ${
            pathname === link.href ? 'text-[#05004B]' : 'text-gray-100'
          } hover:underline transition-colors duration-200`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
