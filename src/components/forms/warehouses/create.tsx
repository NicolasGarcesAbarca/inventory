"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import SmallSpinner from "@/components/spinners/small";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Almacén no puede estar vacio",
  }),
  address: z.string().min(1, {
    message: "Dirección del almacén no puede estar vacio",
  }),
});

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function FormWarehouseCreate({ setModalOpen }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    await fetch("/api/warehouses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    setIsLoading(false);
    setModalOpen((prev) => !prev);
    toast({
      title: "Almacén creado correctamente",
    });
    location.reload()
  }

  if (isLoading) return <SmallSpinner />;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Almacén</FormLabel>
              <FormControl>
                <Input placeholder="Bodega 23" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input placeholder="Los Alerces 32, San Miguel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  );
}
