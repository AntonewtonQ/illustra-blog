import SignupForm from "@/components/SignupForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-14">
      <div className="flex justify-start items-start w-[350px]">
        <Link href="/">
          <Button className="rounded-full w-12 h-12 bg-white text-black border-2 hover:bg-zinc-100">
            <ArrowLeft />
          </Button>
        </Link>
      </div>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
