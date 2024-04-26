import { Metadata } from "next";
import { HiIdentification } from "react-icons/hi";
import FormLogin from "@/components/forms/auth/login";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container flex flex-col justify-center items-center h-full w-full flex-col">
      <div className="flex flex-col justify-center sm:w-[350px]">
        <div className="flex flex-col">
          <div className="flex flex-col items-center mb-6">
            <HiIdentification size={26} />
            <h1 className="text-2xl font-semibold tracking-tight">Hola</h1>
            <p className="text-sm text-muted-foreground">Ingresa con tu mail</p>
          </div>
        </div>
        <FormLogin />
      </div>
    </div>
  );
}
