import { cookies } from "next/headers";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/server/db";
import { Categories } from "@/server/db/schema";
import DrawerDialogCategoryCreate from "@/components/dialogs/DrawerDialogCategoryCreate";
import DrawerDialogCategoryDelete from "@/components/dialogs/DrawerDialogCategoryDelete";
import { DrawerDialogCategoryUpdate } from "@/components/dialogs/DrawerDialogCategoryUpdate";
import EmptyTable from "@/components/empty/table";
import { getCurrentUser } from "@/lib/auth/user";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function CategoriesComp() {
  const cks = cookies();
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  const categories = await db.select().from(Categories);
  return (
    <div className="px-24  w-full h-screen">
      <h1 className="text-2xl font-bold my-6">Categorías</h1>
      <div className="py-4 flex flex-row-reverse">
        <DrawerDialogCategoryCreate />
      </div>
      {categories.length < 1 ? (
        <EmptyTable message="No hay categorías registradas" />
      ) : (
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((cat) => (
              <TableRow key={cat.id}>
                <TableCell className="font-medium">{cat.name}</TableCell>
                <TableCell className="flex gap-2">
                  <div>
                    <DrawerDialogCategoryUpdate category={cat} />
                  </div>
                  <div>
                    <DrawerDialogCategoryDelete category={cat} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
