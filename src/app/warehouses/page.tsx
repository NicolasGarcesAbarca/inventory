import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/server/db";
import { Warehouses } from "@/server/db/schema";
import DrawerDialogWarehouseCreate from "@/components/dialogs/DrawerDialogWarehouseCreate";
import DrawerDialogWarehouseUpdate from "@/components/dialogs/DrawerDialogWarehouseUpdate";
import DrawerDialogWarehouseDelete from "@/components/dialogs/DrawerDialogWarehouseDelete";
import EmptyTable from "@/components/empty/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function WarehousesComponent() {
  const warehouses = await db.select().from(Warehouses);
  return (
    <div className="px-24  w-full h-screen">
      <h1 className="text-2xl font-bold my-6">Almacenes</h1>
      <div className="py-4 flex flex-row-reverse">
        <DrawerDialogWarehouseCreate />
      </div>
      {warehouses.length < 1 ? (
        <EmptyTable message="No hay almacenes registrados" />
      ) : (
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Dirección</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {warehouses.map((warehouse) => (
              <TableRow key={warehouse.id}>
                <TableCell className="font-medium">{warehouse.name}</TableCell>
                <TableCell className="font-medium">
                  {warehouse.address}
                </TableCell>

                <TableCell className="flex gap-2">
                  <div>
                  <Button variant="outline">
                    <Link href={"warehouses/" + warehouse.id}>Ver Detalle</Link>
                  </Button>
                  </div>
                  <div>
                    <DrawerDialogWarehouseUpdate warehouse={warehouse} />
                  </div>
                  <div>
                    <DrawerDialogWarehouseDelete warehouse={warehouse} />
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
