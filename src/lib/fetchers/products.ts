import { ProductSelect } from "@/server/db/types";

export const getProducts = (...args: any): Promise<ProductSelect[]> =>
  fetch("/api/products", {
    method: "GET",
  }).then((res) => res.json());
