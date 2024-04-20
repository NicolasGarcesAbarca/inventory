"use client";
import { useState } from "react";

import { SupplierSelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import BoxSupplierDelete from "./BoxSupplierDelete";

interface IProps {
  supplier: SupplierSelect;
}

export default function DrawerDialogSupplierDelete({ supplier }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Borrar Proveedor"
      dialogTitle="Borrar Proveedor"
      dialogDescription=""
    >
      <div>
        <BoxSupplierDelete supplier={supplier} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
