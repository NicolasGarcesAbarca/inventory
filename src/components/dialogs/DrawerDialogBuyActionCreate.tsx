"use client";
import { useState } from "react";
import DrawerDialogBase from "./DrawerDialogBase";
import FormBuyActionCreate from "../forms/buyactions/create";

export default function DrawerDialogBuyActionCreate() {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Nueva Compra"
      dialogTitle="Crear Compra"
      dialogDescription="Crea una nueva compra"
    >
      <div>
        <FormBuyActionCreate setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
