"use client";
import { CategorySelect } from "@/server/db/types";
import DrawerDialogBase from "./DrawerDialogBase";
import FormCategoryUpdate from "../forms/categories/update";
import { useState } from "react";

interface IProps {
  category: CategorySelect;
}

export function DrawerDialogCategoryUpdate({ category }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Editar Categoría"
      dialogTitle="Editar Categoría"
      dialogDescription="Editar Categoría existente"
    >
      <div>
        <FormCategoryUpdate category={category} setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
