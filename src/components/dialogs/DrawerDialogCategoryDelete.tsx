"use client";
import { useState } from "react";

import { CategorySelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import BoxCategoryDelete from "./BoxCategoryDelete";

interface IProps {
  category: CategorySelect;
}

export default function DrawerDialogCategoryDelete({ category }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Borrar Categoría"
      dialogTitle="Borrar Categoría"
      dialogDescription=""
    >
      <div>
        <BoxCategoryDelete category={category} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
