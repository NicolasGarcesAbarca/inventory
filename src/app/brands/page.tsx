import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/server/db";
import { Brands } from "@/server/db/schema";
import DrawerDialogBrandCreate from "@/components/dialogs/DrawerDialogBrandCreate";
import { DrawerDialogBrandUpdate } from "@/components/dialogs/DrawerDialogBrandUpdate";
import DrawerDialogBrandDelete from "@/components/dialogs/DrawerDialogBrandDelete";
import EmptyTable from "@/components/empty/table";
import { cookies } from "next/headers";

export default async function CategoriesComp() {
  const cks = cookies();
  const brands = await db.select().from(Brands);
  return (
    <div className="px-24  w-full h-screen">
      <h1 className="text-2xl font-bold my-6">Marcas</h1>
      <div className="py-4 flex flex-row-reverse">
        <DrawerDialogBrandCreate />
      </div>
      {brands.length < 1 ? (
        <EmptyTable message="No hay marcas registradas" />
      ) : (
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brands.map((brand) => (
              <TableRow key={brand.id}>
                <TableCell className="font-medium">{brand.name}</TableCell>
                <TableCell className="flex gap-2">
                  <div>
                    <DrawerDialogBrandUpdate brand={brand} />
                  </div>
                  <div>
                    <DrawerDialogBrandDelete brand={brand} />
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
