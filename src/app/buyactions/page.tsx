import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/server/db";
import {
  BuyActions,
  Products,
  Suppliers,
  Warehouses,
} from "@/server/db/schema";
import EmptyTable from "@/components/empty/table";
import DrawerDialogBuyActionCreate from "@/components/dialogs/DrawerDialogBuyActionCreate";
import { eq } from "drizzle-orm";
import { DrawerDialogBuyActionUpdate } from "@/components/dialogs/DrawerDialogBuyActionUpdate";
import DrawerDialogBuyActionDelete from "@/components/dialogs/DrawerDialogBuyActionDelete";

export default async function BuyactionsPage() {
  const buyactions = await db
    .select()
    .from(BuyActions)
    .leftJoin(Products, eq(BuyActions.productId, Products.id))
    .leftJoin(Warehouses, eq(BuyActions.warehouseId, Warehouses.id))
    .leftJoin(Suppliers, eq(BuyActions.supplierId, Suppliers.id));
  return (
    <div className="px-24  w-full h-screen">
      <h1 className="text-2xl font-bold my-6">Compras</h1>
      <div className="py-4 flex flex-row-reverse">
        <DrawerDialogBuyActionCreate />
      </div>
      {buyactions.length < 1 ? (
        <EmptyTable message="No hay compras registradas" />
      ) : (
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead>Producto</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Cantidad</TableHead>
              <TableHead>Alamcen</TableHead>
              <TableHead>Proveedor</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {buyactions.map((buyaction) => (
              <TableRow key={buyaction.buy_actions.id}>
                <TableCell className="font-medium">
                  {buyaction.products?.name}
                </TableCell>

                <TableCell className="font-medium">
                  {buyaction.buy_actions.price}
                </TableCell>
                <TableCell className="font-medium">
                  {buyaction.buy_actions.quantity}
                </TableCell>
                <TableCell className="font-medium">
                  {buyaction.warehouses?.name}
                </TableCell>
                <TableCell className="font-medium">
                  {buyaction.suppliers?.name}
                </TableCell>
                <TableCell className="font-medium">
                  {buyaction.buy_actions.createdAt.toLocaleString()}
                </TableCell>
                <TableCell className="flex gap-2">
                  <div>
                    <DrawerDialogBuyActionUpdate
                      buyaction={buyaction.buy_actions}
                    />
                  </div>
                  <div>
                    <DrawerDialogBuyActionDelete
                      buyaction={buyaction.buy_actions}
                    />
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
