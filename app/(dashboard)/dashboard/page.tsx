"use client";

import { handleLogout } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="items-center flex justify-center m-10">
      <Button onClick={() => handleLogout(router)}>SAIR</Button>
    </div>
  );
};

export default DashboardPage;
