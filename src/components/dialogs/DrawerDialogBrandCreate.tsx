"use client";
import { useState } from "react";
import DrawerDialogBase from "./DrawerDialogBase";
import FormBrandCreate from "../forms/brands/create";

export default function DrawerDialogBrandCreate() {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Nueva Marca"
      dialogTitle="Crear Marca"
      dialogDescription="Crea una nueva marca para tus productos"
    >
      <div>
        <FormBrandCreate setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
