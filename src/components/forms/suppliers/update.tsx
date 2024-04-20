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
import { CategorySelect, SupplierSelect } from "@/server/db/types";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Proveedor no puede estar vacio",
  }),
});

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  supplier: SupplierSelect;
}

export default function FormSupplierUpdate({ supplier, setModalOpen }: IProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: supplier.name,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    fetch("/api/suppliers", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values, id: supplier.id }),
    });
    setModalOpen((prev) => !prev);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proveedor</FormLabel>
              <FormControl>
                <Input placeholder="Fabricante" {...field} />
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
