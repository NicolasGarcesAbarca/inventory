"use client";
import { useState } from "react";
import FormCategoryCreate from "../forms/categories/create";
import DrawerDialogBase from "./DrawerDialogBase";

export default function DrawerDialogCategoryCreate() {
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialogBase
      open={open}
      setOpen={setOpen}
      buttonText="Nueva Categoría"
      dialogTitle="Crear Categoría"
      dialogDescription="Crea una nueva categoría para tus productos"
    >
      <div>
        <FormCategoryCreate setModalOpen={setOpen} />
      </div>
    </DrawerDialogBase>
  );
}
