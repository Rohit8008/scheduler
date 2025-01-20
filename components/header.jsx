import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="mx-auto py-2 px-4 flex justify-between">
      <Link href={"/"} className="flex items-center">
        <Image src="/logo.png" alt="Scheduler logo" width="150" height="60" />
      </Link>
    </nav>
  );
};

export default Header;
