import { SupplierSelect } from "@/server/db/types";

export const getSuppliers = (...args: any): Promise<SupplierSelect[]> =>
  fetch("/api/suppliers", {
    method: "GET",
  }).then((res) => res.json());
