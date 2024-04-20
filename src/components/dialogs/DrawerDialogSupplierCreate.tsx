"use client";
import { useState } from "react";
import DrawerDialogBase from "./DrawerDialogBase";
import FormSupplierCreate from "../forms/suppliers/create";

export default function DrawerDialogSupplierCreate() {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Nuevo Proveedor"
      dialogTitle="Crear Proveedor"
      dialogDescription="Crea una nuevo proveedor para tus productos"
    >
      <div>
        <FormSupplierCreate setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
