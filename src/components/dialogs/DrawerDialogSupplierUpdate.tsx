"use client";
import { SupplierSelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import { useState } from "react";
import FormSupplierUpdate from "../forms/suppliers/update";

interface IProps {
  supplier: SupplierSelect;
}

export function DrawerDialogSupplierUpdate({ supplier }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Editar Proveedor"
      dialogTitle="Editar Proveedor"
      dialogDescription="Editar Proveedor existente"
    >
      <div>
        <FormSupplierUpdate supplier={supplier} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
