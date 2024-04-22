"use client";
import { useState } from "react";
import DrawerDialogBase from "./DrawerDialogBase";
import FormProductCreate from "../forms/products/create";

export default function DrawerDialogProductCreate() {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Nuevo Producto"
      dialogTitle="Crear Producto"
      dialogDescription="Boton guardar al fondo"
    >
      <div>
        <FormProductCreate setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
