"use client";

import useSWR from "swr";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SmallSpinner from "@/components/spinners/small";
import { getSuppliers } from "@/lib/fetchers/supplier";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { getWarehouses } from "@/lib/fetchers/warehouse";
import { getProducts } from "@/lib/fetchers/products";
import { BuyActionSelect } from "@/server/db/types";

const formSchema = z.object({
  price: z.string().min(0, {
    message: "Precio no puede ser negativo",
  }),
  quantity: z.string().min(0, {
    message: "Cantidad no puede ser negativa",
  }),
  productId: z.string(),
  warehouseId: z.string(),
  supplierId: z.string(),
});

interface IProps {
  buyaction: BuyActionSelect;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function FormBuyActionUpdate({
  buyaction,
  setModalOpen,
}: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  //TODO check if there is a parallel way
  const {
    data: warehouses,
    error: errorWarehouses,
    isLoading: isLoadingWarehouses,
  } = useSWR("api/warehouses", getWarehouses);
  const {
    data: products,
    error: errorProducts,
    isLoading: isLoadingProducts,
  } = useSWR("api/products", getProducts);
  const {
    data: suppliers,
    error: errorSuppliers,
    isLoading: isLoadingSuppliers,
  } = useSWR("api/suppliers", getSuppliers);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: `${buyaction.price}`,
      quantity: `${buyaction.quantity}`,
      productId: `${buyaction.productId}`,
      warehouseId: `${buyaction.warehouseId}`,
      supplierId: `${buyaction.supplierId}`,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    await fetch("/api/buyactions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values, id: buyaction.id }),
    });
    setIsLoading(false);
    setModalOpen((prev) => !prev);
    toast({
      title: "Compra editada correctamente",
    });
    location.reload()
  }
  if (
    isLoading ||
    isLoadingProducts ||
    isLoadingWarehouses ||
    isLoadingSuppliers
  )
    return (
      <div className="">
        <SmallSpinner />
      </div>
    );
  if (errorProducts || errorWarehouses || errorSuppliers)
    return <div>Error...</div>;
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input placeholder="990" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input placeholder="2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Producto</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un producto" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {products &&
                      products.map((product) => (
                        <SelectItem key={product.id} value={`${product.id}`}>
                          {product.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="warehouseId"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Almacén</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un almacén" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {warehouses &&
                      warehouses.map((warehouse) => (
                        <SelectItem
                          key={warehouse.id}
                          value={`${warehouse.id}`}
                        >
                          {warehouse.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="supplierId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proveedor</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un proveedor" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {suppliers &&
                      suppliers.map((supplier) => (
                        <SelectItem key={supplier.id} value={`${supplier.id}`}>
                          {supplier.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Guardar</Button>
        </form>
      </Form>
    </>
  );
}
