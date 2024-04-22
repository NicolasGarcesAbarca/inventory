import { db } from "@/server/db";
import { Products } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const ProductSchema = z.object({
  name: z.string(),
  code: z.string(),
  price: z.number(),
  categoryId: z.number(),
  brandId: z.number(),
  supplierId: z.number(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const product = ProductSchema.parse({
    name: body.name,
    code: body.code,
    price: parseInt(body.price, 10), // TODO check form int
    categoryId: parseInt(body.categoryId, 10),
    brandId: parseInt(body.brandId, 10),
    supplierId: parseInt(body.supplierId, 10),
  });
  const result = await db.insert(Products).values(product).returning();
  return Response.json({ msg: "Categoria creada!" });
}

export async function GET(request: Request) {
  const result = await db.select().from(Products);
  return Response.json(result);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const product = ProductSchema.parse({
    name: body.name,
    code: body.code,
    price: parseInt(body.price, 10), // TODO check form int
    categoryId: parseInt(body.categoryId, 10),
    brandId: parseInt(body.brandId, 10),
    supplierId: parseInt(body.supplierId, 10),
  });
  const result = await db
    .update(Products)
    .set(product)
    .where(eq(Products.id, body.id))
    .returning();
  return Response.json({ msg: "wena" });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const result = await db
    .delete(Products)
    .where(eq(Products.id, body.id))
    .returning();
  return Response.json({ msg: result });
}
