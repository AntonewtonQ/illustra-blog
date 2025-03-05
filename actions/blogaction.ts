import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

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
