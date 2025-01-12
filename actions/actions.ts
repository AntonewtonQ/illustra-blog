export default function handleSubmit(formData: FormData){
    const email = formData.get("email");
    console.log(formData.get("password"));
    console.log(formData.get("repassword"));
    console.log(email);

}