import { db } from "@/server/db";
import { ProductWarehouse } from "../../schema";
import { z } from "zod";
import { and, eq } from "drizzle-orm";

const ProductWarehouseSchema = z.object({
  quantity: z.number(),
  productId: z.number(),
  warehouseId: z.number(),
});

export default async function insertOrUpdateProductWarehouse(
  productWarehouse: z.infer<typeof ProductWarehouseSchema>
) {
  try {
    const matchedProductWarehouses = await db
      .select({ productQuantity: ProductWarehouse.quantity })
      .from(ProductWarehouse)
      .where(
        and(
          eq(ProductWarehouse.productId, productWarehouse.productId),
          eq(ProductWarehouse.warehouseId, productWarehouse.warehouseId)
        )
      );
    // pre-existing product inside warehouse
    let result;
    if (matchedProductWarehouses.length > 0) {
      result = await db
        .update(ProductWarehouse)
        .set({
          quantity:
            matchedProductWarehouses[0].productQuantity +
            productWarehouse.quantity,
        })
        .where(
          and(
            eq(ProductWarehouse.productId, productWarehouse.productId),
            eq(ProductWarehouse.warehouseId, productWarehouse.warehouseId)
          )
        )
        .returning();
    } else {
      result = await db
        .insert(ProductWarehouse)
        .values(productWarehouse)
        .returning();
    }

    return result;
  } catch (e) {
    return null;
  }
}
