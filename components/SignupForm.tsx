"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { handleSignup } from "@/actions/actions";

/*
const Step1Schema = z.object({
  email: z.string().email("Insira um e-mail válido."),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
  confirmPassword: z.string().min(6, "A confirmação da senha é obrigatória."),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem.",
  path: ["confirmPassword"],
});
*/

const SignupForm = () => {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Criar conta</CardTitle>
          <CardDescription>Crie a sua conta aqui</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSignup}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Name</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
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
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="repassword">Password</Label>
                <Input
                  name="repassword"
                  type="password"
                  id="repassword"
                  placeholder="your password here"
                />
              </div>
            </div>
            <Button type="submit" className="mt-4">
              Criar conta
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupForm;
