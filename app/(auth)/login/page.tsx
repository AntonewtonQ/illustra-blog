"use client";
import { handleLogin } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-14">
      <div className="flex justify-start items-start w-[350px]">
        <Link href="/">
          <Button className="rounded-full w-12 h-12 bg-white text-black border-2 hover:bg-zinc-100">
            <ArrowLeft />
          </Button>
        </Link>
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>login as admin</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              await handleLogin(formData, router);
            }}
          >
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">email</Label>
                <Input
                  type="email"
                  name="email"
                  id="name"
                  placeholder="admin email here"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="admin password here"
                />
              </div>
            </div>
            <div className="w-full space-x-1 mt-2 flex">
              <Button type="submit" className="">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
