"use client";

import { handleLogout } from "@/actions/actions";
import { CreatePostForm } from "@/components/CreatePostForm";
import PostList from "@/components/PostList";
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
    <div className="items-center flex flex-col space-y-4">
      <div className="items-center flex  justify-evenly w-full">
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
        <Button variant="destructive" onClick={() => handleLogout(router)}>
          SAIR
        </Button>
      </div>
      <div className="w-full">
        <PostList />
      </div>
    </div>
  );
};

export default DashboardPage;
