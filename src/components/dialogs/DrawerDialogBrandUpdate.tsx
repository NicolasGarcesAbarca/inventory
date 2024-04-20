"use client";
import { BrandSelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import { useState } from "react";
import FormBrandUpdate from "../forms/brands/update";

interface IProps {
  brand: BrandSelect;
}

export function DrawerDialogBrandUpdate({ brand }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Editar Marca"
      dialogTitle="Editar Marca"
      dialogDescription="Editar Marca existente"
    >
      <div>
        <FormBrandUpdate brand={brand} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
