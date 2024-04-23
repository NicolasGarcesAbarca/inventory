import { WarehousesSelect } from "@/server/db/types";

export const getWarehouses = (...args: any): Promise<WarehousesSelect[]> =>
  fetch("/api/warehouses", {
    method: "GET",
  }).then((res) => res.json());
