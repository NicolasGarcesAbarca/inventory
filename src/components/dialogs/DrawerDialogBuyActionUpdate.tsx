"use client";
import { BuyActionSelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import { useState } from "react";
import FormBuyActionUpdate from "../forms/buyactions/update";

interface IProps {
  buyaction: BuyActionSelect;
}

export function DrawerDialogBuyActionUpdate({ buyaction }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Editar"
      dialogTitle="Editar Compra"
      dialogDescription="Editar Compra"
    >
      <div>
        <FormBuyActionUpdate buyaction={buyaction} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
