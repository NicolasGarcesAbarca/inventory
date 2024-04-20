"use client";
import { useState } from "react";

import { BrandSelect, CategorySelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import BoxBrandDelete from "./BoxBrandDelete";

interface IProps {
  brand: BrandSelect;
}

export default function DrawerDialogBrandDelete({ brand }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Borrar Marca"
      dialogTitle="Borrar Marca"
      dialogDescription=""
    >
      <div>
        <BoxBrandDelete brand={brand} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
