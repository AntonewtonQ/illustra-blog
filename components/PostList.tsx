"use client";

import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import BlogItem from "./PostItem";
import { db } from "@/firebase";
import { Post } from "@/models/Post";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("createdAt", "desc")); // Ordenando do mais recente para o mais antigo

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];
      setPosts(postsData);
    });

    return () => unsubscribe(); // Desinscreve da atualização ao desmontar o componente
  }, []);

  useEffect(() => {
    // Buscar todos os usuários e criar um mapeamento { userID: nome }
    const fetchAuthors = async () => {
      const usersRef = collection(db, "users");
      const usersSnapshot = await getDocs(usersRef);

      const usersData: { [key: string]: string } = {};
      usersSnapshot.forEach((doc) => {
        const userData = doc.data();
        usersData[doc.id] = userData.name || "Usuário Desconhecido"; // Fallback se não tiver nome
      });

      setAuthors(usersData);
    };

    fetchAuthors();
  }, []);

  return (
    <div className="max-w-[870px] mx-auto p-4 lg:py-8 flex-col items-start justify-center border-t-2 border-black ">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum post encontrado.</p>
      ) : (
        posts.map((post) => (
          <BlogItem
            key={post.id}
            title={post.title}
            category={post.tags?.join(", ") || "Sem categoria"}
            description={post.content.slice(0, 150) + "..."} // Mostra só um trecho do conteúdo
            author={authors[post.authorID] || "Autor desconhecido"}
            date={
              post.createdAt
                ? new Date(post.createdAt?.seconds * 1000).toLocaleDateString()
                : "Data desconhecida"
            }
            id={post.id}
            image={post.image || "/blog_pic_1.png"} // Caso não tenha imagem
            author_img={post.author_img || "/profile_icon.png"}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
