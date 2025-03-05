"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  id: string;
  title: string;
  content: string;
  tags?: string[];
  authorID: string;
  authorName?: string; // Vamos buscar no Firestore
  createdAt?: { seconds: number; nanoseconds: number };
  image?: string;
  author_img?: string;
}

type Params = {
  id: string;
};

const BlogPage = ({ params }: { params: Promise<Params> }) => {
  const [data, setData] = useState<BlogProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const unwrappedParams = use(params);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "posts", unwrappedParams.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const postData = docSnap.data() as BlogProps;

          // Buscar o nome do autor
          const authorRef = doc(db, "users", postData.authorID);
          const authorSnap = await getDoc(authorRef);
          const authorData = authorSnap.exists() ? authorSnap.data() : null;

          setData({
            ...postData,
            id: unwrappedParams.id,
            authorName: authorData ? authorData.name : "Autor Desconhecido",
            author_img: authorData?.profilePicture || "/profile_icon.png",
          });
        } else {
          setError("Post não encontrado");
        }
      } catch (err) {
        setError("Erro ao carregar post");
        console.error(err);
      }
      setLoading(false);
    };

    fetchBlogData();
  }, [unwrappedParams.id]); // Somente executa quando `id` estiver disponível

  if (loading) {
    return (
      <div className="flex flex-col h-screen space-y-3 justify-center items-center">
        <Skeleton className="h-[520px] w-[1000px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[1000px]" />
          <Skeleton className="h-4 w-[900px]" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col h-screen items-center justify-center">
        <p className="text-xl text-red-500">{error}</p>
        <Button onClick={() => router.push("/")}>Voltar para home</Button>
      </div>
    );
  }

  return (
    <div className="max-w-[870px] mx-auto p-4 lg:py-24 flex-col items-start justify-center space-y-4">
      <div className="flex gap-4">
        <Button className="transition ease-in-out rounded-3xl delay-150 hover:-translate-y-1 duration-300">
          <Link className="w-full flex gap-2 items-center" href="/login">
            Login <ArrowRight />
          </Link>
        </Button>
        <Button className="bg-white text-black rounded-3xl border-[1px] hover:bg-zinc-100 border-zinc-400 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <Link href="/">View all blogs</Link>
        </Button>
      </div>
      <div className="w-full flex flex-col items-start gap-4">
        <Image
          src={data?.image || "/blog_pic_1.png"}
          alt={data?.title || "Imagem do post"}
          width={600}
          height={600}
          className="rounded-3xl"
        />
        <p className="text-[15px] font-light">{`#${
          data?.tags || "Sem categoria"
        }`}</p>
      </div>

      <h1 className="text-3xl font-extrabold">{data?.title}</h1>
      <div className="flex justify-start items-center space-x-4">
        <div className="flex items-center justify-center gap-2">
          <Image src={"/profile_icon.png"} alt="Autor" width={38} height={38} />
          <p>{data?.authorName}</p>
        </div>
        <span className="text-zinc-500 text-lg">-</span>
        <p className="text-zinc-500 text-sm lg:text-base">
          {data?.createdAt
            ? new Date(data.createdAt.seconds * 1000).toLocaleDateString()
            : "Data desconhecida"}
        </p>
      </div>
      <div>
        <p>{data?.content}</p>
      </div>
    </div>
  );
};

export default BlogPage;
