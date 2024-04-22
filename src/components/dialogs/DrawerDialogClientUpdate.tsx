"use client";
import { ClientSelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import { useState } from "react";
import FormClientUpdate from "../forms/clients/update";

interface IProps {
  client: ClientSelect;
}

export function DrawerDialogClientUpdate({ client }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Editar Cliente"
      dialogTitle="Editar Cliente"
      dialogDescription="Editar Cliente"
    >
      <div>
        <FormClientUpdate client={client} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
