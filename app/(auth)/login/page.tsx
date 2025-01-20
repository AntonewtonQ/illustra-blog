"use client";
import { handleLogin } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
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
          <CardTitle>Fazer Login</CardTitle>
          <CardDescription>Faça login na sua conta</CardDescription>
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
                <Label htmlFor="name">Name</Label>
                <Input
                  type="email"
                  name="email"
                  id="name"
                  placeholder="your email here"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="your password here"
                />
              </div>
            </div>
            <div className="w-full space-x-1 mt-2 flex">
              <Button type="submit" className="">
                Login
              </Button>
              <Link href="/signup" className="">
                <Button
                  type="button"
                  className="bg-white text-black justify-start border hover:bg-zinc-100"
                >
                  Criar conta
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
