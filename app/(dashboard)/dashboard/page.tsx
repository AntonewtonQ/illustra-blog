"use client";

import { handleLogout } from "@/actions/actions";
import { CreatePostForm } from "@/components/CreatePostForm";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="items-center flex flex-col justify-center m-10">
      <Button onClick={() => handleLogout(router)}>SAIR</Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="flex items-center justify-center">
            <Plus />
            <span>Criar Post</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="space-y-4">
          <SheetHeader>
            <SheetTitle>Novo Post</SheetTitle>
            <SheetDescription>
              Crie uma nova publicação para o seu blog
            </SheetDescription>
          </SheetHeader>
          <CreatePostForm />
          <SheetFooter>
            <p>Inove </p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DashboardPage;
