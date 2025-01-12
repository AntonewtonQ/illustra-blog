import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="max-w-[870px] mx-auto py-16 px-4 lg:py-24 flex items-center justify-center ">
      <Link href="/">
        <p className="text-[20px] font-[600] text-zinc-950 hover:text-zinc-700">
          illustra blog
        </p>
      </Link>
    </header>
  );
};

export default Header;
