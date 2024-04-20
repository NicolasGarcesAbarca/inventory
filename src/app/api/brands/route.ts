import { db } from "@/server/db";
import { Brands } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await db.insert(Brands).values(body).returning();
  return Response.json({ msg: "Categoria creada!" });
}

export async function GET(request: Request) {
  const result = await db.select().from(Brands);
  return Response.json(result);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const result = await db
    .update(Brands)
    .set({ name: body.name })
    .where(eq(Brands.id, body.id))
    .returning();
  return Response.json({ msg: "wena" });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const result = await db
    .delete(Brands)
    .where(eq(Brands.id, body.id))
    .returning();
  return Response.json({ msg: result });
}
