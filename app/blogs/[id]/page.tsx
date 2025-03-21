"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  onSnapshot,
  where,
} from "firebase/firestore";
import { auth, db } from "@/firebase";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { onAuthStateChanged, User } from "firebase/auth";
import { toggleLike } from "@/actions/blogaction";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup para evitar memory leaks
  }, [auth]);

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

  // Atualizar número de likes em tempo real
  useEffect(() => {
    if (!data) return;

    const likesRef = collection(db, "likes");
    const likeQuery = query(
      likesRef,
      where("postID", "==", unwrappedParams.id)
    );

    const unsubscribeLikes = onSnapshot(likeQuery, (snapshot) => {
      setLikeCount(snapshot.size);
      if (user) {
        setLiked(snapshot.docs.some((doc) => doc.data().userID === user.uid));
      }
    });

    return () => unsubscribeLikes();
  }, [unwrappedParams.id, user, data]);

  const handleLike = async () => {
    if (!user) {
      alert("Você precisa estar logado para curtir.");
      return;
    }
    const result = await toggleLike(unwrappedParams.id);
    if (result.success) {
      setLiked(!!result.liked);
      setLikeCount((prev) => (result.liked ? prev + 1 : prev - 1));
    }
  };

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
        <Button
          className={`transition ease-in-out rounded-3xl delay-150 hover:-translate-y-1 duration-300 ${
            user ? "hidden" : "flex"
          }`}
        >
          <Link className={`w-full flex gap-2 items-center `} href="/login">
            Login <ArrowRight />
          </Link>
        </Button>

        <Button className="bg-white text-black rounded-3xl border-[1px] hover:bg-zinc-100 border-zinc-400 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <Link href="/">View all posts</Link>
        </Button>
        <Button className={`w-full ${user ? "flex" : "hidden"}`}>
          <Link className={`w-full gap-2 items-center `} href="/dashboard">
            Dashboard
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-extrabold">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data?.title}</ReactMarkdown>
      </h1>

      <div>
        <div className="prose max-w-none font-semibold">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data?.content || ""}
          </ReactMarkdown>
        </div>
      </div>
      <div className="flex justify-between items-center space-x-4">
        <div className="flex items-center justify-center gap-2">
          <p className="font-bold">{data?.authorName}</p>
        </div>
        <span className="text-zinc-500 text-lg">-</span>
        <p className="text-zinc-500 text-sm lg:text-base">
          {data?.createdAt
            ? new Date(data.createdAt.seconds * 1000).toLocaleDateString()
            : "Data desconhecida"}
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
