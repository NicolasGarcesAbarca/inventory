"use client";
import { useState } from "react";
import DrawerDialogBase from "./DrawerDialogBase";
import FormClientCreate from "../forms/clients/create";

export default function DrawerDialogClientCreate() {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Nuevo Cliente"
      dialogTitle="Crear Cliente"
      dialogDescription="Crea un nuevo cliente"
    >
      <div>
        <FormClientCreate setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
