"use client";
import { ProductSelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import { useState } from "react";
import FormProductUpdate from "../forms/products/update";

interface IProps {
  product: ProductSelect;
}

export function DrawerDialogProductUpdate({ product }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Editar Producto"
      dialogTitle="Editar Producto"
      dialogDescription="Editar producto existente"
    >
      <div>
        <FormProductUpdate product={product} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
