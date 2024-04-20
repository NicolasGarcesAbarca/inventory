"use client";
import { SupplierSelect } from "@/server/db/types";
import { Button } from "../ui/button";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useToast } from "@/components/ui/use-toast";

interface IProps {
  supplier: SupplierSelect;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BoxSupplierDelete({ supplier, setModalOpen }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const handleDelete = async () => {
    setIsLoading(true);
    await fetch("/api/suppliers", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: supplier.id }),
    });
    setIsLoading(false);
    setModalOpen(false);
    toast({
      title: "Proveedor Eliminado",
    });
  };
  return (
    <div className="flex flex-col gap-3">
      {isLoading ? (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <>
          <p className="text-red-600 w-full text-sm">
            Seguro/a que quieres eliminar el proveedor {supplier.name}?
          </p>
          <Button variant={"destructive"} onClick={() => handleDelete()}>
            Borrar
          </Button>
        </>
      )}
    </div>
  );
}
