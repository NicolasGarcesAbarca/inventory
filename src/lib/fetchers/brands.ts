import { BrandSelect } from "@/server/db/types";

export const getBrands = (...args: any): Promise<BrandSelect[]> =>
  fetch("/api/brands", {
    method: "GET",
  }).then((res) => res.json());
