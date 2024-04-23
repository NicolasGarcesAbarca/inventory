"use client";
import { useState } from "react";

import { BuyActionSelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import BoxBrandDelete from "./BoxBrandDelete";
import BoxBuyActionDelete from "./BoxBuyActionDelete";

interface IProps {
  buyaction: BuyActionSelect;
}

export default function DrawerDialogBuyActionDelete({ buyaction }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Borrar"
      dialogTitle="Borrar Compra"
      dialogDescription=""
    >
      <div>
        <BoxBuyActionDelete buyaction={buyaction} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
