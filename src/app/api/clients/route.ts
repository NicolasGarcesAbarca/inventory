import { db } from "@/server/db";
import { Clients } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await db.insert(Clients).values(body).returning();
  return Response.json({ msg: "Cliente creado!" });
}

export async function GET(request: Request) {
  const result = await db.select().from(Clients);
  return Response.json(result);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const result = await db
    .update(Clients)
    .set(body)
    .where(eq(Clients.id, body.id))
    .returning();
  return Response.json({ msg: "Cliente actualizado!" });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const result = await db
    .delete(Clients)
    .where(eq(Clients.id, body.id))
    .returning();
  return Response.json({ msg: result });
}
