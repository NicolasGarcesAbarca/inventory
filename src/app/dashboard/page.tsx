import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/auth/user";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  return (
    <div className="flex w-full bg-green-300">
      <h1>Dashboard</h1>
    </div>
  );
}
