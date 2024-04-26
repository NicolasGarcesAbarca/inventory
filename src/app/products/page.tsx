import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/server/db";
import { Products } from "@/server/db/schema";
import DrawerDialogProductCreate from "@/components/dialogs/DrawerDialogProductCreate";
import { DrawerDialogProductUpdate } from "@/components/dialogs/DrawerDialogProductUpdate";
import DrawerDialogProductDelete from "@/components/dialogs/DrawerDialogProductDelete";
import EmptyTable from "@/components/empty/table";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/lib/auth/user";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function ProductPage() {
  const cks = cookies();
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  const products = await db.select().from(Products);
  return (
    <div className="px-24  w-full h-screen">
      <h1 className="text-2xl font-bold my-6">Products</h1>
      <div className="py-4 flex flex-row-reverse">
        <DrawerDialogProductCreate />
      </div>

      {products.length < 1 ? (
        <EmptyTable message="No hay productos registrados" />
      ):<Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell className="flex gap-2">
                <div>
                  <DrawerDialogProductUpdate product={product} />
                </div>
                <div>
                  <DrawerDialogProductDelete product={product} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>}
    </div>
  );
}
