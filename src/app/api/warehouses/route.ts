import { db } from "@/server/db";
import { Warehouses } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await db.insert(Warehouses).values(body).returning();
  return Response.json({ msg: "Almacen creado! " });
}

export async function GET(request: Request) {
  const result = await db.select().from(Warehouses);
  return Response.json(result);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const result = await db
    .update(Warehouses)
    .set({ name: body.name, address: body.address })
    .where(eq(Warehouses.id, body.id))
    .returning();
  return Response.json({ msg: "Almacen actualizado! " });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const result = await db
    .delete(Warehouses)
    .where(eq(Warehouses.id, body.id))
    .returning();
  return Response.json({ msg: result });
}
