import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/server/db";
import { Clients } from "@/server/db/schema";
import EmptyTable from "@/components/empty/table";
import DrawerDialogClientCreate from "@/components/dialogs/DrawerDialogClientCreate";
import { DrawerDialogClientUpdate } from "@/components/dialogs/DrawerDialogClientUpdate";
import DrawerDialogClientDelete from "@/components/dialogs/DrawerDialogClientDelete";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/lib/auth/user";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function ClientsPage() {
  const cks = cookies();
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  const clients = await db.select().from(Clients);
  return (
    <div className="px-24  w-full h-screen">
      <h1 className="text-2xl font-bold my-6">Clientes</h1>
      <div className="py-4 flex flex-row-reverse">
        <DrawerDialogClientCreate />
      </div>
      {clients.length < 1 ? (
        <EmptyTable message="No hay clientes registrados" />
      ) : (
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Dirección</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell className="font-medium">{client.email}</TableCell>
                <TableCell className="font-medium">{client.address}</TableCell>

                <TableCell className="flex gap-2">
                  <div>
                    <DrawerDialogClientUpdate client={client} />
                  </div>
                  <div>
                    <DrawerDialogClientDelete client={client} />
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
