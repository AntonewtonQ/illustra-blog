"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { createPost } from "@/actions/blogaction";

export function CreatePostForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const result = await createPost(formData);

    if (result.success) {
      //toast({ title: "Post criado!", description: "Seu post foi publicado com sucesso." });
      router.push("/dashboard"); // Redireciona após criação
    } else {
      //toast({ title: "Erro", description: result.error, variant: "destructive" });
    }

    setLoading(false);
  }

  return (
    <Card className="w-full max-w-lg mx-auto py-4">
      <CardContent className="">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              name="title"
              placeholder="Digite o título"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Conteúdo</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Escreva seu post..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <Input
              id="tags"
              name="tags"
              placeholder="Tags (separadas por vírgula)"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Publicando..." : "Publicar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
