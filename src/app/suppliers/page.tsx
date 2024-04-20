import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/server/db";
import { Suppliers } from "@/server/db/schema";
import DrawerDialogSupplierCreate from "@/components/dialogs/DrawerDialogSupplierCreate";
import { DrawerDialogSupplierUpdate } from "@/components/dialogs/DrawerDialogSupplierUpdate";
import DrawerDialogSupplierDelete from "@/components/dialogs/DrawerDialogSupplierDelete";

export default async function CategoriesComp() {
  const suppliers = await db.select().from(Suppliers);
  return (
    <div className="px-24  w-full h-screen">
      <h1 className="text-2xl font-bold my-6">Proveedores</h1>
      <div className="py-4 flex flex-row-reverse">
        <DrawerDialogSupplierCreate />
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell className="font-medium">{supplier.name}</TableCell>
              <TableCell className="flex gap-2">
                <div>
                  <DrawerDialogSupplierUpdate supplier={supplier} />
                </div>
                <div>
                  <DrawerDialogSupplierDelete supplier={supplier} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
