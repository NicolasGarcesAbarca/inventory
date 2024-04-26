import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/auth/user";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <h1 className="text-xl font-bold">Bienvenido al Inventario</h1>
    </div>
  );
}
