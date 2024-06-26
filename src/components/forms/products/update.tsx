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
import { getCategories } from "@/lib/fetchers/category";
import SmallSpinner from "@/components/spinners/small";
import { getBrands } from "@/lib/fetchers/brands";
import { getSuppliers } from "@/lib/fetchers/supplier";
import { ProductSelect } from "@/server/db/types";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Nombre no puede estar vacio",
  }),
  code: z.string().min(1, {
    message: "Codigo no puede estar vacio",
  }),
  price: z.string().min(0, {
    message: "Precio no puede ser negativo",
  }),
  categoryId: z.string(),
  brandId: z.string(),
  supplierId: z.string(),
});

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: ProductSelect;
}

export default function FormProductUpdate({ product, setModalOpen }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  //TODO check if there is a parallel way
  const {
    data: categories,
    error: errorCategories,
    isLoading: isLoadingCategories,
  } = useSWR("api/categories", getCategories);
  const {
    data: brands,
    error: errorBrands,
    isLoading: isLoadingBrands,
  } = useSWR("api/brands", getBrands);
  const {
    data: suppliers,
    error: errorSuppliers,
    isLoading: isLoadingSuppliers,
  } = useSWR("api/suppliers", getSuppliers);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product.name,
      code: product.code,
      price: `${product.price}`,
      categoryId: `${product.categoryId}`,
      brandId: `${product.brandId}`,
      supplierId: `${product.supplierId}`,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    await fetch("/api/products", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...values, id: product.id}),
    });
    setIsLoading(false);
    setModalOpen((prev) => !prev);
    toast({
      title: "Producto editado correctamente",
    });
    location.reload()
  }
  if (isLoadingCategories || isLoadingBrands || isLoadingSuppliers)
    return (
      <div className="">
        <SmallSpinner />
      </div>
    );
  if (errorCategories || errorBrands || errorSuppliers)
    return <div>Error...</div>;
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Rafael" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Codigo</FormLabel>
                <FormControl>
                  <Input placeholder="9e#45rt" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input placeholder="11890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoria" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories &&
                      categories.map((category) => (
                        <SelectItem key={category.id} value={`${category.id}`}>
                          {category.name}
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
            name="brandId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una marca" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {brands &&
                      brands.map((brand) => (
                        <SelectItem key={brand.id} value={`${brand.id}`}>
                          {brand.name}
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
