import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/server/db";
import { ProductWarehouse, Products, Warehouses } from "@/server/db/schema";
import { eq } from "drizzle-orm";

interface IProps {
  params: { slug: string };
}

export default async function WarehouseDetailPage({ params }: IProps) {
  const id = parseInt(params.slug, 10);
  const warehouses = await db
    .select()
    .from(Warehouses)
    .where(eq(Warehouses.id, id));
  const warehouse = warehouses[0];

  const productwarehouses = await db
    .select()
    .from(ProductWarehouse)
    .where(eq(ProductWarehouse.warehouseId, id))
    .leftJoin(Products, eq(ProductWarehouse.productId, Products.id));

  return (
    <div className="px-24  w-full h-screen">
      <h1 className="text-2xl font-medium mt-6">Almacén: {warehouse?.name}</h1>
      <p className="text-base font-base">Dirección: {warehouse.address}</p>
      <h2 className="text-xl font-medium my-6">Productos</h2>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Cantidad</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productwarehouses.map((productwarehouse) => (
            <TableRow key={productwarehouse.product_warehouse.productId}>
              <TableCell className="font-medium">
                {productwarehouse.products?.name}
              </TableCell>
              <TableCell className="font-medium">
                {productwarehouse.product_warehouse?.quantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
