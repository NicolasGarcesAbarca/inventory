import { env } from "@/../env.mjs";

export async function POST(request: Request) {
  const body = await request.json();
  console.log({ credentialLog: body });
  const { email, password } = body;
  if (email === env.ADMIN_EMAIL && password === env.ADMIN_PASS) {
    return Response.json(body);
  }
  return new Response(null, { status: 401 });
}
