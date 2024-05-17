import React from 'react';
import Link from 'next/link';
import SearchBar from 'components/clients/SearchBar';

const Header = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <SearchBar />
    </nav>
  );
};

export default Header;
