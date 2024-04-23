"use client";
import { ClientSelect } from "@/server/db/types";
import { Button } from "../ui/button";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useToast } from "@/components/ui/use-toast";

interface IProps {
  client: ClientSelect;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BoxClientDelete({ client, setModalOpen }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const handleDelete = async () => {
    setIsLoading(true);
    await fetch("/api/clients", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: client.id }),
    });
    setIsLoading(false);
    setModalOpen(false);
    toast({
      title: "Cliente eliminado",
    });
    location.reload();
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
            Seguro/a que quieres eliminar el cliente {client.name}?
          </p>
          <Button variant={"destructive"} onClick={() => handleDelete()}>
            Borrar
          </Button>
        </>
      )}
    </div>
  );
}
