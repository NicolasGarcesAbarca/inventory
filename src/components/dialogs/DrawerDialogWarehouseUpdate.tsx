"use client";
import { WarehousesSelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import { useState } from "react";
import FormWarehouseUpdate from "../forms/warehouses/update";

interface IProps {
  warehouse: WarehousesSelect;
}

export default function DrawerDialogWarehouseUpdate({ warehouse }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Editar Almacén"
      dialogTitle="Editar Almacén"
      dialogDescription="Editar Almacén existente"
    >
      <div>
        <FormWarehouseUpdate warehouse={warehouse} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
