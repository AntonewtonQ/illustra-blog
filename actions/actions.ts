import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export async function handleSignup(formData: FormData){
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();
    const repassword = formData.get("repassword")?.toString().trim();
    
    console.log(email);
    console.log(password);
    console.log(repassword);

    if(!email || !password || !repassword){
        console.log("Por favor, preencha todos os campos.");
        return;
    }

    if(password != repassword){
        console.log("as senhas não coincidem")
        return;
    }

    const personalData = { email, password }
    
    

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        personalData.email,
        personalData.password
      );
      
      const user = userCredential.user;

      // Salve os dados no Firestore usando o UID como ID do documento
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        email: personalData.email || "",
        name: "default name",
        bio:"default bio",
        profilephoto:""
      });
      console.log(user)

      /*
      toast({
        title: "Conta criada com sucesso!",
        description: "Sua conta foi criada. Você pode fazer login agora.",
      });
      setStep(5);
     */
      console.log("conta criada com sucesso");
    } catch (error) {
      /*
      toast({
        title: "Erro ao criar conta",
        description: "Ocorreu um erro ao criar sua conta. Tente novamente.",
      });
      */
      console.log("error: ", error);
    }
}

export async function handleLogin(formData:FormData) {
    const router = useRouter();

    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    if(!email || !password){
        console.log("Por favor, preencha todos os campos.");
        return;
    }

    const data = {email, password}

    try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        /*
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta!",
        });
        */
       console.log("login feito com sucesso");
        router.push("/dashboard");
      } catch (error) {
        /*
        toast({
          title: "Erro no login",
          description: "Email ou senha inválidos.",
        });
        */
       console.log("error: ", error);
      }
  
    
}