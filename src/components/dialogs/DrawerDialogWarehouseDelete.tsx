"use client";
import { useState } from "react";

import { WarehousesSelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import BoxSupplierDelete from "./BoxSupplierDelete";
import BoxWarehouseDelete from "./BoxWarehouseDelete";

interface IProps {
  warehouse: WarehousesSelect;
}

export default function DrawerDialogWarehouseDelete({ warehouse }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Borrar Almacén"
      dialogTitle="Borrar Almacén"
      dialogDescription=""
    >
      <div>
        <BoxWarehouseDelete warehouse={warehouse} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
