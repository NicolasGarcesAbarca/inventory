import DrawerDialogCategory from "@/components/dialogs/DrawerDialogCategory";
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
import { HiTrash } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import DrawerDialogCategoryUpdate from "@/components/dialogs/DrawerDialogCategoryUpdate";
import DrawerDialogCategoryDelete from "@/components/dialogs/DrawerDialogCategoryDelete";

export default async function CategoriesComp() {
  const categories = await db.select().from(Categories);
  return (
    <div className="px-24  w-full h-screen">
      <h1 className="text-2xl font-bold my-6">Categorias</h1>
      <div className="py-4 flex flex-row-reverse">
        <DrawerDialogCategory />
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
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
    </div>
  );
}
