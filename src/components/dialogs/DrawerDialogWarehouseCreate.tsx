"use client";
import { useState } from "react";
import DrawerDialogBase from "./DrawerDialogBase";
import FormWarehouseCreate from "../forms/warehouses/create";

export default function DrawerDialogWarehouseCreate() {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Nuevo Almacén"
      dialogTitle="Crear Almacén"
      dialogDescription="Crea un nuevo almacén "
    >
      <div>
        <FormWarehouseCreate setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
