import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[870px] mx-auto py-4 px-4  flex items-center justify-center ">
      <p className="text-muted-foreground text-sm">
        2025 - <Link href="https://antonewton.vercel.app/">antonewton.dev</Link>
      </p>
    </footer>
  );
};

export default Footer;
