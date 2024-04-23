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
import { BrandSelect } from "@/server/db/types";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import SmallSpinner from "@/components/spinners/small";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Marca no puede estar vacio",
  }),
});

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  brand: BrandSelect;
}

export default function FormBrandUpdate({ brand, setModalOpen }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: brand.name,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    await fetch("/api/brands", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values, id: brand.id }),
    });
    setIsLoading(false);
    setModalOpen((prev) => !prev);
    toast({
      title: "Marca editada Correctamente",
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
              <FormLabel>Categoria</FormLabel>
              <FormControl>
                <Input placeholder="Categoria" {...field} />
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
