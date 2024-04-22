"use client";
import { useState } from "react";

import { ProductSelect} from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import BoxProductDelete from "./BoxProductDelete";

interface IProps {
    product: ProductSelect;
}

export default function DrawerDialogProductDelete({ product }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Borrar Producto"
      dialogTitle="Borrar Producto"
      dialogDescription=""
    >
      <div>
        <BoxProductDelete product={product} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
