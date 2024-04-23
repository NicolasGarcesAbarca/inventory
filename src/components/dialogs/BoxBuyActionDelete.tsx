"use client";
import { BuyActionSelect } from "@/server/db/types";
import { Button } from "../ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import SmallSpinner from "../spinners/small";

interface IProps {
  buyaction: BuyActionSelect;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BoxBuyActionDelete({
  buyaction,
  setModalOpen,
}: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const handleDelete = async () => {
    setIsLoading(true);
    await fetch("/api/buyactions", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: buyaction.id }),
    });
    setIsLoading(false);
    setModalOpen(false);
    toast({
      title: "Compra Eliminada",
    });
    location.reload()
  };
  return (
    <div className="flex flex-col gap-3">
      {isLoading ? (
        <SmallSpinner />
      ) : (
        <>
          <p className="text-red-600 w-full text-sm">
            Seguro/a que quieres eliminar la compra?
          </p>
          <Button variant={"destructive"} onClick={() => handleDelete()}>
            Borrar
          </Button>
        </>
      )}
    </div>
  );
}
