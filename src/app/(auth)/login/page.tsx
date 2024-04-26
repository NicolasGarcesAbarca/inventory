import { Metadata } from "next";
import { HiIdentification } from "react-icons/hi";
import FormLogin from "@/components/forms/auth/login";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="relative container flex h-screen w-screen flex-col items-center justify-center">
      <div className="flex flex-col justify-center sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <HiIdentification size={20}/>
          <h1 className="text-2xl font-semibold tracking-tight">
            Hola
          </h1>
          <p className="text-sm text-muted-foreground">
            Ingresa con tu mail
          </p>
        </div>
        <FormLogin />
      </div>
    </div>
  );
}
