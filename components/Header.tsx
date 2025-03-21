"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { auth } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup para evitar memory leaks
  }, [auth]);
  return (
    <header className="max-w-[870px] mx-auto py-6 px-4  flex items-center justify-between ">
      <Link href="/">
        <p className="text-[20px] font-[600] text-zinc-950 hover:text-zinc-700">
          expose your feelings
        </p>
      </Link>
      <div className="flex items-center space-x-3">
        <Button className={`w-full ${user ? "flex" : "hidden"}`}>
          <Link className={`w-full gap-2 items-center `} href="/dashboard">
            Dashboard
          </Link>
        </Button>
        <Button className={`w-full ${user ? "hidden" : "flex"}`}>
          <Link className={`w-full gap-2 items-center `} href="/login">
            login
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
