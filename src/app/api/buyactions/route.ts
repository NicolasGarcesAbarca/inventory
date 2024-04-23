import { db } from "@/server/db";
import { BuyActions } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const BuyActionSchema = z.object({
  price: z.number(),
  quantity: z.number(),
  productId: z.number(),
  warehouseId: z.number(),
  supplierId: z.number(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const buyaction = BuyActionSchema.parse({
    price: parseInt(body.price, 10),
    quantity: parseInt(body.quantity, 10),
    productId: parseInt(body.productId, 10),
    warehouseId: parseInt(body.warehouseId, 10),
    supplierId: parseInt(body.supplierId, 10),
  });
  const result = await db.insert(BuyActions).values(buyaction).returning();
  return Response.json({ msg: "Compra creada!" });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const buyaction = BuyActionSchema.parse({
    price: parseInt(body.price, 10),
    quantity: parseInt(body.quantity, 10),
    productId: parseInt(body.productId, 10),
    warehouseId: parseInt(body.warehouseId, 10),
    supplierId: parseInt(body.supplierId, 10),
  });
  const result = await db
    .update(BuyActions)
    .set(buyaction)
    .where(eq(BuyActions.id, body.id))
    .returning();
  return Response.json({ msg: "Compra editada" });
}

export async function DELETE(request: Request) {
    const body = await request.json();
    const result = await db
      .delete(BuyActions)
      .where(eq(BuyActions.id, body.id))
      .returning();
    return Response.json({ msg: result });
  }
  