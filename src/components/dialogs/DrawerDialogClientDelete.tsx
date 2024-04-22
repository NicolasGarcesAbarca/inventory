"use client";
import { useState } from "react";

import { ClientSelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import BoxClientDelete from "./BoxClientDelete";

interface IProps {
  client: ClientSelect;
}

export default function DrawerDialogClientDelete({ client }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Borrar Cliente"
      dialogTitle="Borrar Cliente"
      dialogDescription=""
    >
      <div>
        <BoxClientDelete client={client} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
