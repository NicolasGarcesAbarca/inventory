"use client";
import * as React from "react";

import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CategorySelect } from "@/server/db/types";
import BoxCategoryDelete from "./BoxCategoryDelete";

interface IProps {
  category: CategorySelect;
}
export default function DrawerDialogCategoryDelete({ category }: IProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Eliminar Categoría</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Categoría</DialogTitle>
            <DialogDescription>Elimina la categoría</DialogDescription>
          </DialogHeader>
          <div>
            <BoxCategoryDelete category={category} setModalOpen={setOpen} />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Eliminar Categoría</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Eliminar Categoría</DrawerTitle>
          <DrawerDescription>Eliminar Categoría</DrawerDescription>
        </DrawerHeader>
        <div>
          <h1>HERE SHOULD BE FORM</h1>
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
