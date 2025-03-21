import { getFirestore, collection, addDoc, serverTimestamp, doc, getDocs, query, where, deleteDoc, updateDoc, increment } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

export async function toggleLike(postID: string) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return { success: false, error: "Usuário não autenticado." };
  }

  const likesRef = collection(db, "likes");
  const likeQuery = query(likesRef, where("postID", "==", postID), where("userID", "==", user.uid));
  
  const likeSnapshot = await getDocs(likeQuery);
  const postRef = doc(db, "posts", postID);

  if (!likeSnapshot.empty) {
    // Se o usuário já curtiu, remover like
    const likeDoc = likeSnapshot.docs[0];
    await deleteDoc(doc(db, "likes", likeDoc.id));

    // Decrementa o contador de likes no Firestore
    await updateDoc(postRef, {
      likes: increment(-1),
    });

    return { success: true, liked: false };
  } else {
    // Se ainda não curtiu, adicionar like
    await addDoc(likesRef, {
      postID,
      userID: user.uid,
      createdAt: new Date(),
    });

    // Incrementa o contador de likes no Firestore
    await updateDoc(postRef, {
      likes: increment(1),
    });

    return { success: true, liked: true };
  }
}


export async function createPost(formData: FormData) {
    try {
        // Obtém o usuário autenticado
        const user = auth.currentUser;
        if (!user) {
            throw new Error("Usuário não autenticado.");
        }

        // Extrai os dados do formulário
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        const tags = (formData.get("tags") as string)?.split(",").map(tag => tag.trim()) || [];

        if (!title || !content) {
            throw new Error("Título e conteúdo são obrigatórios.");
        }

        // Cria o objeto do post
        const newPost = {
            title,
            content,
            authorID: user.uid,
            tags,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            likes: 0,
            commentsCount: 0,
            published: true
        };

        // Adiciona o post no Firestore
        const docRef = await addDoc(collection(db, "posts"), newPost);
        console.log("Post criado com ID:", docRef.id);

        return { success: true, postID: docRef.id };
    } catch (error) {
        console.error("Erro ao criar post:", error);
        return { success: false, error: error};
    }
}
